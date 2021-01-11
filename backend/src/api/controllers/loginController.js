require('dotenv/config');
const knex = require('../../database/connection')
const jwt = require('jsonwebtoken')
async function login(req, res){
    const { email, pass } = req.body;
    await knex('users')
    .where('email', email).andWhere('pass', pass)
    .select('id').first().then(id=>{
        //validate ID
        if(!id) res.status(400).send({ message:"User not found"})
        //create token with user id
        const token = jwt.sign({ id }, process.env.SECRET, { expiresIn:86400 })
        //return request
        return res.status(200).send({
            message:'Connection accepted',
            token
        });
    }).catch(err=>res.status(401).send(err));
}
module.exports = login
