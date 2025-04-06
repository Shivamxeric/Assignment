import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import ConnnectDB from './db/mongoose.js';
import router from './routes/auth.route.js';
import User from './model/user.model.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV !== "production") {
}

dotenv.config();
app.use(express.json());

app.use(cors({
  // origin: "http://localhost:5173",  // Frontend URL
  origin: process.env.Base_url,  // Frontend URL
  methods: ['GET', 'POST'],        // Allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Allowed headers
}));

// Routes
app.use("/api/auth", router);

app.get("/", async (req,res) => {
  const userName = await User.find();
  res.send(userName).status(200)
})

app.get("/",  (req,res) => {
res.send("Server start")
})

// Start the server    
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    ConnnectDB();  
});


