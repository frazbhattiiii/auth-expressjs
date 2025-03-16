import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(error);

  if (error.name === 'ValidationError') {
    res.status(400).json({
      message: 'Validation Error',
      errors: error.errors,
    });
    return;
  }

  if (error.code === 'P2002') {
    res.status(409).json({
      message: 'Resource already exists',
    });
    return;
  }

  res.status(500).json({
    message: 'Internal Server Error',
  });
};