import db from "../config/database.js";

export const createProduct = async (product) => {
  const [newProduct] = await db("products").insert(product).returning("*");
  return newProduct;
};

export const getAllProducts = async (showDeleted) => {
  let query =  db("products");
   if (showDeleted === "true") {
  } else if (showDeleted === "onlyDeleted") {
    query.whereNotNull("deleted_at");
  } else {
    query.whereNull("deleted_at");
  }
  return await query.select(["name", "id"]);
};

export const getProductById = async (id) => {
  const product = await db("products")
    .where({ id: id })
    .whereNull("deleted_at")
    .first();
  return product;
};

export const updateProduct = async (id, product) => {
  const [updatedProduct] = await db("products")
    .where({ id: id })
    .whereNull("deleted_at")
    .update(product)
    .returning("*");
  return updatedProduct;
};

export const deletedProduct = async (id) => {
  const [deletedProduct] = await db("products")
    .where({ id: id })
    .update({ deleted_at: new Date() })
    .returning("*");
  return deletedProduct;
};
