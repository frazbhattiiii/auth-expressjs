import app from './app';
import { X_PORT } from './config/constants';

const PORT = Number(X_PORT) || 8000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
