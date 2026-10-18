import "dotenv/config";
import mongoose from "mongoose";
import User from "./models/user.model.js";

const testDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to:", mongoose.connection.name);

        const user = await User.create({
            username: "testuser",
            email: `test-${Date.now()}@example.com`,
            password: "temporary-test-password",
        });

        console.log("Test user created:", user._id);
        console.log("Collection:", User.collection.name);
    } catch (error) {
        console.error("Database test failed:", error.message);
    } finally {
        await mongoose.disconnect();
    }
};

testDB();