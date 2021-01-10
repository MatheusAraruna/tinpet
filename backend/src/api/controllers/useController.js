require('dotenv/config')
const knex = require('../../database/connection');
const jwt = require('jsonwebtoken')
async function list(_,res){
    await knex('users').select("id","name","email","age","image")
    .then(ls=>res.status(200).send(ls))
    .catch(err=>res.status(401).send(err));
}
async function create(req,res){
    //Get name of image
    const image = req.file.path;
    const { name, email, pass, age } = req.body;
    await knex('users').insert({
        name,
        email,
        pass,
        age,
        image 
    }).then(id=>{
        const token = jwt.sign({ id }, process.env.SECRET, { expiresIn:86400 })
        return res.status(201).json({
            message:"User created successfully",
            token
        });
    }).catch(err=>res.status(401).send(err))
}
async function update(req,res){
    const { id } = req.params;
    const image = req.file.path;
    const { name, email, pass, age } = req.body;
    await knex('users').where('id', id).update({
        name,
        email,
        pass,
        age,
        image
    }).then(()=>{
        return res.status(200).send({ message: "Update success" })
    }).catch(err=>
        res.status(401).send(err)
    )
}
async function devList(_,res){
    await knex('users').select('*')
    .then(ls=>res.status(200).send(ls))
    .catch(err=>res.status(401).send(err));
}
module.exports = { list, create, update, devList }