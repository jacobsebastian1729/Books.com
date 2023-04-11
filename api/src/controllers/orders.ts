import { Request, Response } from "express";

import OrderServices from "../services/orders";
import Order from "../models/Order";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    console.log(req.body.productList, "orderList");
    const newOrder = new Order({
      userId: req.params.userId,
      productOrder: req.body,
    });
    const order = await OrderServices.createOrder(newOrder);
    res.json({ status: true, message: "order placed" });
  } catch (error) {
    //console.log(error);
  }
};

export const getOrderByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId;
    const orders = await OrderServices.getOrderByUserId(userId);
    res.json(orders);
  } catch (error) {
    //console.log(error);
  }
};

export const deleteOrderById = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const deleteOrder = await OrderServices.deleteOrderById(orderId);
    res.json(deleteOrder);
  } catch (error) {
    //console.log(error);
  }
};
