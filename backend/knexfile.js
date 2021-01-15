require('dotenv/config')
module.exports = {
    test:{
      client:'sqlite3',
      connection: ":memory:",
      migrations:{
        directory: __dirname + '/src/database/migrations'
      },
      seeds:{
        directory: __dirname + '/src/database/seeds'
      },
      useNullAsDefault: true
    },
    development:{
        client:'sqlite3',
        connection:{
          filename: __dirname + '/src/database/mydb.sqlite'
        },
        migrations:{
          directory: __dirname + '/src/database/migrations'
        },
        seeds:{
          directory: __dirname + '/src/database/seeds'
        },
        useNullAsDefault: true
    },
    staging: {
      client: 'mysql',
      version:'5.2',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        charset:'utf8'
      },
      migrations: {
        directory: __dirname + '/src/database/migrations'
      },
      seeds:{
        directory: __dirname + '/src/database/seeds'
      }
    },
    production: {
      client: 'mysql',
      version: '5.2',
      connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME,
        charset: 'utf8'
      },
      migrations: {
        directory: __dirname + '/src/database/migrations',
      },
      seeds:{
        directory: __dirname +  '/src/database/seeds'
      }
    }
  };