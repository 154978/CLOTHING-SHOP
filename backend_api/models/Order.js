import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  items: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  total: Number,
  status: { type: String, default: "pending" },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
