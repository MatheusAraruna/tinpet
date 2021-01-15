require('dotenv/config')
const knex = require('knex');
//Checking which environment will be used
const env = process.env.ENV || 'test'
//Set enviroment
const config = require('../../knexfile')[env]
const connection = knex(config)
module.exports = connection