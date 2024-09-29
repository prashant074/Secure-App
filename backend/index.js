import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB } from "./db/connectDB.js"; // MongoDB connection function
import authRoutes from "./routes/auth.route.js"; // Authentication routes

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve(); // For resolving file paths

// Middleware Configuration

// Enable CORS for cross-origin requests from the frontend
app.use(cors({
  origin: "http://localhost:5173", // Frontend URL (during development)
  credentials: true, // Allow credentials (cookies) to be sent with requests
}));

// Parse incoming JSON requests (req.body)
app.use(express.json());

// Parse incoming cookies (req.cookies)
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes); // Authentication-related routes

// Serve frontend in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve the frontend build
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); // Fallback to index.html for any unmatched route
  });
}

// Start server and connect to MongoDB
app.listen(PORT, () => {
  connectDB(); // Establish connection to MongoDB
  console.log("Server is running on port:", PORT);
});

export default app;
