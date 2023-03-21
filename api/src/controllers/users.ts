import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User, { UserDocument } from "../models/User";
import UserServices from "../services/users";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const hashed_Password = req.body.password;

    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(hashed_Password, saltRound);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
      phone: req.body.phone,
      //address: {
      no: req.body.no,
      street: req.body.street,
      city: req.body.city,
      country: req.body.country,
      zipcode: req.body.zipcode,
      //},
    });
    const user = await UserServices.createUser(newUser);
    res.json({ message: "user created got to login page" });
  } catch (error) {
    res.json({ message: "user already exist got to login page" });
  }
};

export const loginWithPassword = async (req: Request, res: Response) => {
  try {
    const userData = await UserServices.findUserByEmail(req.body.email);

    if (!userData) {
      res.json({ status: false,
        message: `cant find user ${req.body.email}` 
      });
      return;
    }

    const passwordDatabase = userData.password;
    const plainPassword = req.body.password;

    const match = await bcrypt.compare(plainPassword, passwordDatabase);

    if (!match) {
      res.json({ status: false,
        message: "wrong password" 
      });
      return;
    }

    res.json({
      status: true,
      message: userData._id
    });
    
  } catch (error) {
    console.log(error);
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const userData = await UserServices.getUserById(req.params.userId)
    res.json({
      email: userData?.email,
      //id: userData?._id,
      phone: userData?.phone,
      no: userData?.no,
      street: userData?.street,
      city: userData?.city,
      country: userData?.country,
      zipcode: userData?.zipcode,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updataUserByIdController = async (req: Request, res: Response) => {
  try {
    const update = req.body;
    const userId = req.params.userId;
    const updatedUser = await UserServices.updateUserById(userId, update);
    res.json({ status: true,
      message: "userdetails update" 
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePasswordByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const hashed_Password = req.body.newPassword;

    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(hashed_Password, saltRound);

    const userId = req.params.userId;

    const newPassword = <UserDocument>{ password: hashedPassword };
    const updatePassword = await UserServices.updatePasswordById(
      userId,
      newPassword
    );
    res.json({ status: true,
      message: "user password updated" 
    });
  } catch (error) {
    console.log(error);
  }
};
