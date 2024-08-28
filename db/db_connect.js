const { drizzle } = require("drizzle-orm/node-postgres");
const { Client } = require("pg");

const client = new Client({
  host: "localhost", //or DB_URL
  port: 5432,
  user: "postgres",
  password: "saroj",
  database: "DrizzleBoilerPlate",
});
client
  .connect()
  .then(() => console.log("DB connected sucessfully."))
  .catch((e) => console.log(`error: ${e.message}`));

  const db = drizzle(client);

  module.exports = db;