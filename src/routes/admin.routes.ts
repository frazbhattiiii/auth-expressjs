import { Router } from 'express';
import { UserController } from '../controllers/admin.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';
import { z } from 'zod';
import { Role } from '@prisma/client';

const router = Router();
const userController = new UserController();

const updateUserSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  role: z.enum([Role.ADMIN, Role.DRIVER, Role.VENDOR, Role.CUSTOMER]).optional(),
});

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin-only routes
 */

/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     summary: Get admin dashboard data
 *     tags: [Admin]
 *     description: Fetches data for the admin dashboard.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved dashboard data
 *       403:
 *         description: Unauthorized access (only Admin)
 */
router.get(
  '/dashboard',
  authenticate,
  authorize(Role.ADMIN),
  userController.get
);

/**
 * @swagger
 * /api/admin/some-operation:
 *   post:
 *     summary: Perform an admin operation
 *     tags: [Admin]
 *     description: Allows an admin to perform a specific operation.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               role:
 *                 type: string
 *                 enum: [ADMIN, DRIVER, VENDOR, CUSTOMER]
 *                 example: "VENDOR"
 *     responses:
 *       200:
 *         description: Operation performed successfully
 *       403:
 *         description: Unauthorized (only Admin)
 */
router.post(
  '/some-operation',
  authenticate,
  authorize(Role.ADMIN),
  validate(updateUserSchema),
  userController.create
);


export default router;
