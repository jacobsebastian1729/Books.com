import User, { UserDocument } from "../models/User";

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

const findUserByEmail = async (email: string): Promise<UserDocument | null> => {
  const foundUser = User.findOne({ email: email });
  return foundUser;
};

const updateUserById = async (
  userId: string,
  user: UserDocument
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(userId, user, { new: true });
};

const updatePasswordById = async (
  userId: string,
  password: UserDocument
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(userId, password, { new: true });
};

const getUserById = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findOne({ _id: userId });
  return foundUser;
};

export default {
  createUser,
  findUserByEmail,
  updateUserById,
  updatePasswordById,
  getUserById,
};
