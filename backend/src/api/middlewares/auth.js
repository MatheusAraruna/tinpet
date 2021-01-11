require('dotenv/config')
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({Error:'No token provided'})
    }
    const parts = authHeader.split(' ');
    if(!parts.length === 2){
        return res.status(401).send({ error:'Token error'})
    }
    const [ scheme, token] = parts;
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error:'Token malformatted'})
    }
    jwt.verify(token, process.env.SECRET, ()=>{
        if(err) return res.status(401).send({err:'Token invalid'})
        req.id = decoded.id;
        return next();
    })
}