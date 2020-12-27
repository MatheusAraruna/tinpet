const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {
          "name":faker.name.findName(),
          "race":"viralata",
          "age":12,
          "image":faker.image.imageUrl(),
          "about":faker.lorem.sentence(3,3)
        },
        {
          "name":faker.name.findName(),
          "race":"viralata",
          "age":12,
          "image":faker.image.imageUrl(),
          "about":faker.lorem.sentence(3,3)
        },
        {
          "name":faker.name.findName(),
          "race":"viralata",
          "age":12,
          "image":faker.image.imageUrl(),
          "about":faker.lorem.sentence(3,3)
        },
        {
          "name":faker.name.findName(),
          "race":"viralata",
          "age":12,
          "image":faker.image.imageUrl(),
          "about":faker.lorem.sentence(3,3)
        }
      ]);
    });
};
