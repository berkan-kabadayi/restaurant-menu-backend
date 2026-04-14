export const up = async (knex) => {
  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id").primary(); 
    table.string("name").notNullable(); 
    table.boolean("is_allergen").notNullable().defaultTo(false); 
    table.timestamp("created_at").defaultTo(knex.fn.now()); 
    table.timestamp("updated_at").nullable(); 
    table.timestamp("deleted_at").nullable(); 
  });
};
export const down = async (knex) => {
  await knex.schema.dropTableIfExists("ingredients");
}; 