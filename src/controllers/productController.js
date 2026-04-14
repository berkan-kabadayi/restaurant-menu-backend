import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deletedProduct,
} from "../models/productModel.js";
import { logger } from "../utils/logger.js";

export const createItem = async (req, res) => {
  try {
    const item = req.body;
    const newItem = await createProduct(item);
    res.status(200).json(newItem);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const {showDeleted} = req.query;
    const items = await getAllProducts(showDeleted);
    res.status(201).json(items);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const items = await getProductById(id);
    if (!items) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(201).json(items);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const updateItem = async (req , res) => {
     try {
        const { id } = req.params;
        const item = await updateProduct(id, req.body);
        if (!item) {
          return res.status(404).json({ message: "Not Found" });
        }
        res.status(200).json(item);
      } catch (error) {
        logger(error, "ERROR");
        res.status(500).json({ message: "Internal Server Error" });
      }
}


export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await deletedProduct(id);
    if (!item) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
