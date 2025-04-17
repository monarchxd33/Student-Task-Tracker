import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
