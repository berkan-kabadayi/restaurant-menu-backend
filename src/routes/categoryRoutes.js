import { Router } from "express";

import {
  createItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} from "../controllers/categoryController.js";

const router = Router();

router.post("/", createItem);
router.get("/", getAllItems);
router.get("/:id", getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
