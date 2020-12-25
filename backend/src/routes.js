const express = require('express');
const app = express.Router();

app.get('/', (_,res)=>{
    return res.send('hello')
})

module.exports = app