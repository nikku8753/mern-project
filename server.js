const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB, getMongoStatus } = require('./config/db');
const seedDatabase = require('./seed/seedRunner');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection & Auto-seed attempt
connectDB().then((isDBConnected) => {
  if (isDBConnected) {
    seedDatabase();
  }
});

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/startup', require('./routes/startupRoutes'));
app.use('/api/companies', require('./routes/companyRoutes'));
app.use('/api/benchmarks', require('./routes/benchmarkRoutes'));
app.use('/api/insights', require('./routes/insightRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    appName: 'StartupLens API',
    mongoConnected: getMongoStatus(),
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

// Root API Endpoint
app.get('/', (req, res) => {
  res.send('StartupLens API Server is running. Visit /api/health for system status.');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 [StartupLens API] Server running on http://localhost:${PORT}`);
});
