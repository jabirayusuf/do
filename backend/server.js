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



//  select form Session table
app.get("/session", (req, res) =>{
    db.all("SELECT * FROM academic_sessions ORDER BY id DESC",(err, data) =>{
        if(err){
            return res.status(500).json({
                error: err.message
            });
        }return res.json(data);
    });
})

// post to Session table
app.post("/session", (req, res) =>{
     const {name, start_date, end_date,} = req.body;
     const created_at = new Date().toISOString().split('T')[0];
     const updated_at = new Date().toISOString().split('T')[0];
     const is_current = "False";
     
    db.run("INSERT INTO academic_sessions (name, start_date, end_date, is_current, created_at, updated_at) VALUES(?,?,?,?,?,?)",[name, start_date, end_date, is_current, created_at, updated_at],(err,result) =>{
       
    if(err){
        return res.status(500).json(console.log(res));
    }return res.json(result);

    });
});
 

app.listen(5000, () =>{
    console.log("server runing on port 5000")
   
});
