const { pgTable, integer, varchar, uuid } = require("drizzle-orm/pg-core");

const userScheme = pgTable("UserTable", {
  id: uuid("id").primaryKey(),
  name: varchar("name").notNull(),
  age: integer("age"),
  phone: integer("phone"),
});

module.exports = { userScheme };
