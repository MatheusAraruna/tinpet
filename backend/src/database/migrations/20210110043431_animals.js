exports.up = function(knex) {
    return knex.schema.createTable('animals', (table)=>{
      table.increments().unsigned();
      table.string('name').notNullable();
      table.string('race').notNullable();
      table.integer('age').notNullable();
      table.specificType('image', 'LONGTEXT').nullable();
      table.specificType('about','LONGTEXT').nullable();
      table.boolean('adopted').notNullable().defaultTo(false);
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  };
  exports.down = function(knex) {
    return knex.schema.dropTable('animals')
  };
  
  