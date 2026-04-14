import db from "../config/database.js";

export const createCategory = async (category) => {
  const [newItem] = await db("categories").insert(category).returning("*");
  return newItem;
};

export const getAllCategories = async () => {
  const query = await db("categories").select(["name", "description"]);
  return query;
};

export const getCategoryById = async (id) => {
  const category = await db("categories")
    .where({ id })
    .whereNull("deleted_at")
    .first();
  return category;
};

export const updateCategory = async (id, category) => {
  const [updatedCategory] = await db("categories")
    .where({ id })
    .whereNull("deleted_at")
    .update(category)
    .returning("*");
  return updatedCategory;
};

export const deletedCategory = async (id) => {
  const [deletedCategory] = await db("categories")
    .where("id", id)
    .update({ deleted_at: new Date() })
    .returning("*");
  return deletedCategory;
};
