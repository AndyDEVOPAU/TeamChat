import {Router} from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Team Chat API is running",
        database: 
            mongoose.connection.readyState === 1
                ? "connected"
                : "disconnected",
    });
});

export default router;