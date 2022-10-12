const db_connection = require("../knexfile")["development"]
const knex = require("knex")(db_connection)

module.exports=knex;
