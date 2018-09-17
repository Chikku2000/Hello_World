const express = require('express');
const app = express();
const Sql = require('mysql');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = Sql.createConnection({
    host : 'localhost' , 
    user : 'root',
    password : 'chirag@123',
    database : 'learningapp200'
})
app.use(express.static(path.join(__dirname , 'public')));
app.set('view engine' , 'ejs');
app.set('view' , path.join(__dirname , 'view'));
app.get('/' , (req , res) =>{
    res.send('My app is working');
})
app.listen(3000 , () =>{
    console.log('Listening at http://localhost:3000');
})