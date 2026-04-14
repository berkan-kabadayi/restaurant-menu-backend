import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deletedCategory,
} from "../models/categoryModel.js";
import { logger } from "../utils/logger.js";

export const createItem = async (req, res) => {
  try {
    const item = req.body;
    const newItem = await createCategory(item);
    res.status(201).json(newItem);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const {showDeleted} = req.query;
    const items = await getAllCategories(showDeleted);
    res.status(200).json(items);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await getCategoryById(id);
    if (!item) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await updateCategory(id, req.body);
    if (!item) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await deletedCategory(id);
    if (!item) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
