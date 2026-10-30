const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/school.db',(err) =>{
    if(err){
        console.error(err.message);
    }else{
        console.log('Connected to the school database.');
    }
});

db.run('PRAGMA foreign_keys = ON;');
module.exports = db;


db.all('SELECT * FROM users ', (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log(rows);
    }
});
