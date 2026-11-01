const express =  require("express");
const cors =  require("cors");
const db =  require("./database/database");

// initialize database tables
// require("./database/init");

const app = express();
app.use(cors());
app.use(express.json());


//  select form student table
app.get("/student", (req, res) =>{
    db.all("SELECT * FROM student",(err, data) =>{
        if(err){
            return res.status(500).json({
                error: err.message
            });
        }return res.json(data);
    });
})


app.listen(5000, () =>{
    console.log("server runing on port 5000")
});