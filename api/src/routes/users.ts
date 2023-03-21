import { Router } from "express";

import passport from "passport";
import {
  createUserController,
  getUserByIdController,
  loginWithPassword,
  updataUserByIdController,
  updatePasswordByIdController,
} from "../controllers/users";

const router = Router();

router.post("/register", createUserController);
router.post("/login", loginWithPassword);
router.put("/:userId", updataUserByIdController);
router.post("/password/:userId", updatePasswordByIdController);
router.get("/:userId", getUserByIdController );
export default router;

