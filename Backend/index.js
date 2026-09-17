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
// CLIENT_ORIGIN supports a comma-separated list. Keep the known production
// frontend in the defaults so the API still works when the Render environment
// variable has not been configured yet.
const defaultAllowedOrigins = [
  "http://localhost:5173",
  "https://soil-farming-agent.vercel.app",
  "https://soil-farming-agent.onrender.com",
];

const configuredOrigins = (process.env.CLIENT_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const allowedOrigins = [...new Set([...defaultAllowedOrigins, ...configuredOrigins])];

if (!mongoDbUri) {
  throw new Error("MongoDBURI environment variable is required");
}

const isAllowedOrigin = (origin) => {
  if (!origin) return true; // Allow non-browser requests (e.g. mobile apps, curl, server-to-server)
  if (allowedOrigins.includes(origin)) return true;

  try {
    const { hostname } = new URL(origin);
    // Dynamically allow all Vercel production and preview deployment URLs
    if (hostname.endsWith(".vercel.app")) return true;
    // Allow Render service domains
    if (hostname.endsWith(".onrender.com")) return true;
    // Allow local development on any port
    if (hostname === "localhost" || hostname === "127.0.0.1") return true;
  } catch {
    return false;
  }
  return false;
};

app.use(cors({
  origin(origin, callback) {
    if (isAllowedOrigin(origin)) {
      return callback(null, true);
    }

    console.warn(`Blocked CORS request from origin: ${origin}`);
    return callback(null, false);
  },
  credentials: true,
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
