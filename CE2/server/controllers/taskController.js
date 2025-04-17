import Task from '../models/Task.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks' });
  }
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  try {
    const task = new Task({ title, description });
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};
