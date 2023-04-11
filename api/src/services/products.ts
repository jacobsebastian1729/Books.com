// product services
import Product, { ProductDocument } from "../models/Product";

const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

const productList = async (): Promise<ProductDocument[]> => {
  return Product.find().sort({ name: 1 });
};

const getProductById = async (
  productId: string
): Promise<ProductDocument | null> => {
  const foundProduct = Product.findOne({ _id: productId });
  return foundProduct;
};

export default { createProduct, productList, getProductById };
