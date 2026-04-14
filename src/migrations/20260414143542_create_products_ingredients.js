export const up = async (knex) => {
  await knex.schema.createTable("products_ingredients", (table) => {
    table.increments("id").primary();
    table
      .integer("product_id")
      .unsigned() 
      .references("id")
      .inTable("products") 
      .onDelete("CASCADE");
    table
      .integer("ingredient_id")
      .unsigned() 
      .references("id")
      .inTable("ingredients") 
      .onDelete("CASCADE");
  });
};
export const down = async (knex) => {
  await knex.schema.dropTableIfExists("products_ingredients");
};