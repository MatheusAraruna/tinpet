const connection = require('../../database/connection');
async function list(_, res){
    await connection('animals').select('*')
    .then(ls=>{
       res.status(200).send(ls)
    }).catch(err=>res.status(400).send(err))
}
async function create(req, res){
    //Get name of all images in array
    const image = req.files.map(item=>item.path).toString();
    const { name, race, age, about, user_id } = req.body
    await connection('animals').insert({
        name,race,age, image, about, user_id
    }).then(()=>{
        res.status(201).send({ message:"Create success" })
    }).catch(err=>res.status(400).send(err))
}
async function update(req, res){
    const { id } = req.params;
    //Get name of all images in array
    const image = req.files.map(item=>item.path).toString();
    const { name, race, age, about } = req.body;
    await connection('animals').where('id',id).update({
        name,
        race,
        age,
        image,
        about
    }).then(()=>{
        res.status('204').send({ message: 'Update success'})
    }).catch(err=>res.status(401).send(err))
}
module.exports = { list, create, update }