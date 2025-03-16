import { Request, Response } from 'express';
import { AdminService } from '../services/admin.service';
import { AuthRequest } from '../middleware/auth.middleware';

const adminService = new AdminService();

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const admin = await adminService.create(req.body);
      res.status(201).json(admin);
    } catch (error) {
      res.status(400).json({ message: 'Admin creation failed' });
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const users = await adminService.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  }

  async getAdminById(req: Request, res: Response): Promise<void> {
    try {
      const admin = await adminService.getAdminById(req.params.id);
      if (!admin) {
        res.status(404).json({ message: 'Admin not found' });
        return;
      }
      res.json(admin);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch admin' });
    }
  }

  async updateAdmin(req: AuthRequest, res: Response): Promise<void> {
    try {
      const admin = await adminService.update(req.params.id, req.body);
      res.json(admin);
    } catch (error) {
      res.status(400).json({ message: 'Admin update failed' });
    }
  }

  async deleteAdmin(req: Request, res: Response): Promise<void> {
    try {
      await adminService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: 'Admin deletion failed' });
    }
  }
}