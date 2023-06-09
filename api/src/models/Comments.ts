import mongoose, { Document } from "mongoose";
import User from "./User";
import Product from "./Product";

export type CommentDocument = Document & {
  date: Date;
  comment: string;
  userId: string;
  productId: string;
  parentCommentId: string;
};

const CommentSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  comment: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
  },
  parentCommentId: {
    type: String,
    default: "first comment",
  },
});

export default mongoose.model<CommentDocument>("Comment", CommentSchema);
