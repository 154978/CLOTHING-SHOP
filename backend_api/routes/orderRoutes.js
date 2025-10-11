import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// CREATE Order
router.post("/", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: "✅ Order created successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET All Orders
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// GET Orders by User ID
router.get("/user/:userId", async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId });
  res.json(orders);
});

export default router;
