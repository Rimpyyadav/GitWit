const express = require('express');
const connectDB = require('./config/db');
const githubRoutes = require('./routes/githubRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/github', githubRoutes);
app.use('/api/user', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
