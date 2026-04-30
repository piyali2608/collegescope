const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./src/routes/auth');
const collegeRoutes = require('./src/routes/colleges');

const app = express();

// ═══ THE CORS PART ═══
// In production, replace '*' with your actual domain (e.g., 'https://collegescope.vercel.app')
app.use(cors({
    origin: process.env.FRONTEND_URL || '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// ═══ SECURITY & UTILS ═══
app.use(helmet()); // Protects against common web vulnerabilities
app.use(morgan('dev')); // Logs requests to terminal
app.use(express.json()); // Parses JSON bodies

// ═══ ROUTES ═══
app.use('/api/auth', authRoutes);
app.use('/api/colleges', collegeRoutes);

// Health Check for Deployment (e.g., Render, Railway, or AWS)
app.get('/health', (req, res) => res.status(200).send('OK'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 CollegeScope Backend running on port ${PORT}`);
});