const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbpath = path.join(__dirname,"school.db");
const db = new sqlite3.Database(dbpath, (err) =>{
    if(err){
        console.error("Database connection failed: err.Message");
    }else{
         console.log("SQLite database connected successfully");
    }
});
module.exports = db;