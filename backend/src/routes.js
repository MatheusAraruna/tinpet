//Imports
const express = require('express');
const app = express.Router();
//Controllers
const animalController = require('./api/controllers/animalController')
const userController = require('./api/controllers/useController')
const loginController = require('./api/controllers/loginController')
//Middlewares
const upload = require('./api/middlewares/upload')
//Routes animals
app.get('/animal', animalController.list)
app.post('/animal', upload.array('image', 4), animalController.create)
app.put('/animal/:id', upload.array('image', 4), animalController.update)
//Routes users
app.get('/user', userController.list)
app.post('/user', upload.single('image'), userController.create)
app.put('/user/:id', upload.single('image'), userController.update)
//Routes login/logout
app.post('/login', loginController.login)

module.exports = app