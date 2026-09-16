import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import soilRoute from "./route/soil.route.js"
import userRoute from "./route/user.route.js"

dotenv.config();

const app = express();
const PORT = Number.parseInt(process.env.PORT, 10) || 4000;
const mongoDbUri = process.env.MongoDBURI;
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

if (!mongoDbUri) {
  throw new Error("MongoDBURI environment variable is required");
}

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Origin not allowed by CORS"));
  },
}));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/soil", soilRoute);
app.use("/user", userRoute);

async function startServer() {
  try {
    await mongoose.connect(mongoDbUri);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();
