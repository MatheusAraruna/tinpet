const faker = require('faker')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name:faker.name.findName(),
          email:faker.internet.email(),
          pass:faker.internet.password(),
          age:18,
          image:faker.image.imageUrl()
        },
        {
          name:faker.name.findName(),
          email:faker.internet.email(),
          pass:faker.internet.password(),
          age:18,
          image:faker.image.imageUrl()
        },
        {
          name:faker.name.findName(),
          email:faker.internet.email(),
          pass:faker.internet.password(),
          age:18,
          image:faker.image.imageUrl()
        },
        {
          name:faker.name.findName(),
          email:faker.internet.email(),
          pass:faker.internet.password(),
          age:18,
          image:faker.image.imageUrl()
        }
      ]);
    });
};
