console.log("✅ Server.js started running");

import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB (allow override via MONGO_URI)
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/ikigai_store";
mongoose.connect(mongoUri)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

// Simple route
app.get("/", (req, res) => {
  res.send("Welcome to IKIGAI API!");
});

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
