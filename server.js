const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const morgan = require('morgan');

morgan('tiny');

const app = express();

//bodyParser config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res)=>{
    res.send("Hello World!");
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})