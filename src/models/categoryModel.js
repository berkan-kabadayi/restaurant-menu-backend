// Doğru import (config klasöründeki bağlantıyı kullanıyoruz)
import db from "../config/database.js"; 

export const createCategory = async (category) => {
  // Burada 'knex' değil, yukarıda import ettiğin 'db' ismini kullanmalısın
  const [newItem] = await db("categories").insert(category).returning("*");
  return newItem;
};

export const getAllCategories = async () => {
  // Yine 'db' ismini kullanıyoruz
  const query = await db("categories").select(["name", "description"]);
  return query;
};