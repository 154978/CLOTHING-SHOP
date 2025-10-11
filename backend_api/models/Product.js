import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
  color: String,
  size: [String],
  brand: String,
  image_url: String,
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productSchema);
