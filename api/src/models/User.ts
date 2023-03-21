import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  email: string;
  password: string;
  name: string;
  phone: number;
  //address: {
  no: string;
  street: string;
  city: string;
  country: string;
  zipcode: number;
  //};
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: " ",
  },
  phone: {
    type: Number,
    requied: true,
    default: 0,
  },
  //address: {
  no: {
    type: String,
    required: true,
    default: " ",
  },
  street: {
    type: String,
    required: true,
    default: " ",
  },
  city: {
    type: String,
    required: true,
    default: " ",
  },
  country: {
    type: String,
    required: true,
    default: " ",
  },
  zipcode: {
    type: Number,
    default: 0,
    required: true,
  },
  //},
});

export default mongoose.model<UserDocument>("User", UserSchema);
