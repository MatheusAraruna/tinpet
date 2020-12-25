const express = require('express');
const app = express.Router();

const animalController = require('./api/controllers/animalController')
//Routes animals
app.get('/animal', animalController.list)
app.post('/animal', animalController.create)
app.put('/animal/:id', animalController.update)
app.delete('/animal/:id', animalController.del)

//Routes user

module.exports = app