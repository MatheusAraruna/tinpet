//Imports
const express = require('express');
const app = express.Router();
//Controllers
const animalController = require('./api/controllers/animalController')
const userController = require('./api/controllers/useController')
//Middlewares
const upload = require('./api/middlewares/upload')
//Routes animals
app.get('/animal', animalController.list)
app.post('/animal', upload.array('image', 4), animalController.create)
app.put('/animal/:id', upload.array('image', 4), animalController.update)
//Routes users
app.get('/user', userController.list)
app.post('/user', upload.single('avatar'), userController.create)
app.put('/user/:id', upload.single('avatar'), userController.update)

module.exports = app