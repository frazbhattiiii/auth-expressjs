import jwt from 'jsonwebtoken';
import { Role } from '@prisma/client';
import {
  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
} from '../config/constants';

export const generateAccessToken = (id: string, role: Role): string => {
  return jwt.sign({ id, role }, JWT_ACCESS_SECRET, {
    expiresIn: Number(ACCESS_TOKEN_EXPIRY),
  });
};

export const generateRefreshToken = (id: string): string => {
  return jwt.sign({ id }, JWT_REFRESH_SECRET, {
    expiresIn: Number(REFRESH_TOKEN_EXPIRY),
  });
};

export const verifyRefreshToken = (token: string): string => {
  const decoded = jwt.verify(token, JWT_REFRESH_SECRET) as any;
  return decoded.id;
};
