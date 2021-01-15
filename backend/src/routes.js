const express = require('express');
const app = express.Router();
//Controllers
const animalController = require('./api/controllers/animalController')
const userController   = require('./api/controllers/useController')
const loginController  = require('./api/controllers/loginController')
//Middlewares
const upload = require('./api/middlewares/upload')
const auth   = require('./api/middlewares/auth')
//Routes animals
app.get('/animal', animalController.list)
app.post('/animal', auth, upload.array('image', 4), animalController.create)
app.put('/animal/:id', auth, upload.array('image', 4), animalController.update)
//Routes users
app.get('/user', auth, userController.list)
app.post('/user', upload.single('image'), userController.create)
app.put('/user/:id', auth, upload.single('image'), userController.update)
//Routes login/logout
app.post('/login', loginController)
//Dev routes
app.get('/dev/user', userController.devList)
//Route all
app.all('*',(_,res)=>{
    return res.status(404).send({ message: "Route not found"})
})


module.exports = app