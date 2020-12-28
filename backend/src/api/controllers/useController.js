const connection = require('../../database/connection');
async function list(_,res){
    const list = await connection('users').select('*');
    return res.json(list)
}
async function create(req,res){
    const image = req.file.path;
    const {
        name,
        email,
        pass,
        age
    } = req.body;
    await connection('users').insert({ 
        name, 
        email, 
        pass, 
        age, 
        image })
    return res.status(201).send();
}
async function update(req,res){
    const { id } = req.params;
    const image = req.file.path;
    const {
        name,
        email,
        pass,
        age
    } = req.body;
    await connection('users').where('id', id).update({
        name,
        email,
        pass,
        age,
        image
    })
    return res.status(204).send();
}
module.exports = { list, create, update }