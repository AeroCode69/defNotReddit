/*
	Server.js 
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const morgan = require('morgan');

morgan('tiny');

const app = express();

//bodyParser confign
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//Database connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "defnotreddit"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to data base!");
  });

app.get('/', (req, res)=>{
    res.send("Hello World!");
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})
