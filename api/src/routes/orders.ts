import { Router } from "express";
import {
  createOrderController,
  deleteOrderById,
  getOrderByUserIdController,
} from "../controllers/orders";

const router = Router();

router.post("/:userId", createOrderController);
router.get("/:userId", getOrderByUserIdController);
router.delete("/:orderId", deleteOrderById);
export default router;
