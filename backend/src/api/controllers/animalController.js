const connection = require('../../database/connection');
async function list(_, res){
    const list = await connection('animals').select('*');
    return res.json(list)
}
async function create(req, res){
    const image = req.files.map(item=>{
        return item.path
    });
    const {  
        name,
        race,
        age,
        about
    } = req.body
    await connection('animals').insert({name,race,age,image,about});
    return res.status(201).send()
}
async function update(req, res){
    const { id } = req.params;
    const image = req.files.map(item=>{
        return item.path
    });
    const {
        name,
        race,
        age,
        about
    } = req.body;
    await connection('animals').where('id',id).update({
        name,
        race,
        age,
        image,
        about
    })
    return res.status(204).send();
}
module.exports = { list, create, update }