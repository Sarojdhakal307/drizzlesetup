const { defineConfig }= require('drizzle-kit');


module.exports = defineConfig({
    schema: './db/schema.js',
    out: './drizzle',
    dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
      host: "localhost",    //or DB_URL
      user: "postgres",
      password: "saroj",
      database: "DrizzleBoilerPlate",
      verbose: true,
      strict: true,
      ssl: false,
    },
  });