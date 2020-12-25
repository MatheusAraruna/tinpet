
exports.up = function(knex) {
  return knex.schema.createTable('users', (table)=>{
    table.increments().unsigned();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('pass').notNullable();
    table.integer('age').notNullable();
    table.specificType('image','LONGTEXT').nullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
