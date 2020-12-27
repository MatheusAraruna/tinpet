const express = require('express');
const app = express.Router();

const animalController = require('./api/controllers/animalController')
const userController = require('./api/controllers/useController')

//Routes animals
app.get('/animal', animalController.list)
app.post('/animal', animalController.create)
app.put('/animal/:id', animalController.update)

//Routes user
app.get('/user', userController.list)
app.post('/user', userController.create)
app.put('/user:id', userController.update)

module.exports = app