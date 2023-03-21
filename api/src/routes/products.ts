// product router here
import { Router } from "express";
import {
  createProductController,
  getProductByIdController,
  getProductListController,
} from "../controllers/products";

const router = Router();

router.post("/", createProductController);
router.get("/", getProductListController);
router.get("/:productId", getProductByIdController);
export default router;
