const express = require('express');
const app = express();
const db = require('./db/db_connect')

const PORT =  9876;

app.get('/',(req,res)=>{
    res.send("i am here!");
});


app.listen(PORT,()=>{
    console.log("Surver Started at : ",PORT);
});