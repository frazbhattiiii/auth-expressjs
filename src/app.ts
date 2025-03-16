import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import adminRoutes from './routes/admin.routes';
import { errorHandler } from './middleware/error.middleware';
import { setupSwagger } from './config/swagger';

const app = express();

app.use(cors());
app.use(express.json());

setupSwagger(app); // Initialize Swagger


app.get('/', (req, res) => {
    res.json({ message: 'User Management API is running' });
  });
  

app.use('/api/auth', authRoutes); 
app.use('/api/admin', adminRoutes);

app.use(errorHandler);

export default app;
