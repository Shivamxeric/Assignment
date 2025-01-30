import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import ConnnectDB from './db/mongoose.js';
import router from './routes/auth.route.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "../env",
  });
}

// Middlewares
app.use(express.json());

// Example: To allow only specific domain (e.g., http://localhost:5173)
app.use(cors({
  origin: process.env.Base_url,  // Frontend URL
  methods: ['GET', 'POST'],        // Allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Allowed headers
}));

// Routes
app.use("/api/auth", router);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    ConnnectDB();  // Connect to database
});
