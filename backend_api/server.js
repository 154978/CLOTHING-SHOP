console.log("✅ Server.js started running");

import express from "express";
import mongoose from "mongoose";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/ikigai_store")
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

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
