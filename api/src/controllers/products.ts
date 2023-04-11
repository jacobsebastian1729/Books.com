// product controller
import { Request, Response } from "express";
import Product from "../models/Product";

import ProductServices from "../services/products";

export const createProductController = async (req: Request, res: Response) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      author: req.body.author,
      image: req.body.image,
      price: req.body.price,
      isAvailable: req.body.isAvailable,
      description: req.body.description,
    });
    const product = await ProductServices.createProduct(newProduct);
    res.json(product);
  } catch (error) {
    //console.log(error);
  }
};

export const getProductListController = async (req: Request, res: Response) => {
  try {
    const productList = await ProductServices.productList();
    res.json(productList);
  } catch (error) {
    //console.log(error);
  }
};

export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.getProductById(req.params.productId);
    res.json(product);
  } catch (error) {
    //console.log(error);
  }
};
