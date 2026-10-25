import express from "express";
import cors from "cors";

import healthRoutes from "./routes/health.routes.js"
import { notFound, errorHandler } from "./middleware/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Team Chat API is running",
    });
});

//Application routes
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);

// NOT application routes
app.use(notFound);
app.use(errorHandler);
export default app;