// product model here
import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  name: string;
  author: string;
  image: string;
  price: number;
  isAvailable: boolean;
  description: string;
};

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: "true",
  },
  description: {
    type: String,
  },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
