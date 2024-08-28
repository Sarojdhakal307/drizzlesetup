const { migrate}= require("drizzle-orm/postgres-js/migrator");
const { db } = require("./db_connect.js");
import config from '../drizzle.config.js';

async function migrateData(){
    await migrate(db, { migrationsFolder: './drizzle'});
    process.exit(0);


}

migrateData().catch(err=>{
    console.log("err : "+err);
    process.exit(0);
});