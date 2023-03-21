import mongoose, { Document } from "mongoose";
import User from "./User";

export const orderProductSchema = new mongoose.Schema({
  
  author: {
    type: String,
  },
  image: {
    type: String,
  },
  isAvailable:{
    type: Boolean,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  
  _id: {
    type: String,
  },
});

export type OrderDocument = Document & {
  date: Date;
  userId: String;
  productOrder: [];
};

const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },

  productOrder: [{ type: orderProductSchema }],
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
