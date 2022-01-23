const express = require("express");
const dotenv = require("dotenv").config()
const cors = require("cors");

const mysql = require("mysql");
// const { json } = require("express");

const app = express();

app.use(cors());
// app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: 3306,
    database: "user_Schema"
})

app.get("/", (req,res) => {
    res.send("Response");
});

app.post("/create", (req,res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const location = req.body.location;
    const id = req.body.id;

    db.query("INSERT INTO new_table (name, age, location, id) VALUES (?,?,?,?)", [name, age, location, id],
        (error, result) => {
            if(error){
                console.log(error);
            }
            else{
                console.log("In else" + result);
                res.send("Values entered succesfully");          
            }
        }
    )
})

app.listen(5000, () => {
    console.log("Server running on port 5000!");
})