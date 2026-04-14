import knex from "knex";
import knexfile from "../../knexfile.js";

const knexInstance = knex(knexfile.development)
export default knexInstance;