const express = require("express");
const dotenv = require("dotenv").config()

const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "user_Schema"
})

app.get("/", (req,res) => {
    res.send("Response");
});

app.post("/create", (req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const location = req.body.location;
    const id = req.body.id;

    db.query("INSERT INTO users (name, age, location, id) VALUES (?,?,?,?,?)", [name, age, location, id],
        (error, result) => {
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
                res.send("Values entered succesfully");          
            }
        }
    )
})

app.listen(5000, () => {
    console.log("Server running on port 5000!");
})