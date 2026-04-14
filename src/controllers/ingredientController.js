import {
  createIngredient,
  getAllIngredients,
  getIngredientById,
  updateIngredient,
  deleteIngredient,
} from "../models/ingredientModel.js";
import { logger } from "../utils/logger.js";

export const createItem = async (req, res) => {
  try {
    const item = req.body;
    const newItem = await createIngredient(item);
    res.status(201).json(newItem);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await getAllIngredients();
    res.status(200).json(items);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await getIngredientById(id);
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
    const item = await updateIngredient(id, req.body);
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
    const item = await deleteIngredient(id);
    if (!item) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(item);
  } catch (error) {
    logger(error, "ERROR");
    res.status(500).json({ message: "Internal Server Error" });
  }
};
