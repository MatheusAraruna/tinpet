module.exports = {
    development:{
        client:'sqlite3',
        connection:{
            filename: './src/database/mydb.sqlite'
        },
        migrations:{
            directory: './src/database/migrations'
        },
        seeds:{
          directory: './src/database/seeds'
        }
        ,
        useNullAsDefault: true
    },
    production: {
      client: 'mysql',
      version: '5.2',
      connection: {
        host : '127.0.0.1',
        user : 'admin',
        password : 'root',
        database : 'dev',
        charset: 'utf8'
      },
      migrations: {
        directory: './src/database/migrations',
      }
    }
  };