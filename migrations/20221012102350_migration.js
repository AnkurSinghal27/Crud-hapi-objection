/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("customer_detail",(table)=>{
        table.increments("id");
        table.string("full_name").notNullable();
        table.string("email").unique().notNullable();
        table.string("password").notNullable();
        table.integer("age").notNullable();
        table.bigInteger("Ph_Number");
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("customer_detail")
};
