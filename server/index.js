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
})

app.listen(5000, () => {
    console.log("Server running on port 5000!");
})