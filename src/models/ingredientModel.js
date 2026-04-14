import db from "../config/database.js";

export const createIngredient = async (ingredient) => {
  const [newIngredient] = await db("ingredients")
    .insert(ingredient)
    .returning("*");
  return newIngredient;
};

export const getAllIngredients = async (showDeleted) => {
  const query = db("ingredients");
  if (showDeleted === "true") {
  } else if (showDeleted === "onlyDeleted") {
    query.whereNotNull("deleted_at");
  } else {
    query.whereNull("deleted_at");
  }
  return await query.select(["name", "id"]);
};

export const getIngredientById = async (id) => {
  const ingredient = await db("ingredients")
    .where({ id: id })
    .whereNull("deleted_at")
    .first();
  return ingredient;
};

export const updateIngredient = async (id, ingredient) => {
  const [updatedIngredient] = await db("ingredients")
    .where({ id: id })
    .whereNull("deleted_at")
    .update(ingredient)
    .returning("*");
  return updatedIngredient;
};

export const deleteIngredient = async (id) => {
  const [deletedIngredient] = await db("ingredients")
    .where({ id: id })
    .update({ deleted_at: new Date() })
    .returning("*");
  return deletedIngredient;
};
