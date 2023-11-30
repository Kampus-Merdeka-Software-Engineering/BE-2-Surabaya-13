'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [{
      Name: 'John Doe',
      Email: 'johndoe123@email.com',
      Password: '133'
    },

    {
      Name: 'Arief B',
      Email: 'ariefb@email.com',
      Password: '123'
    },

    {
      Name: 'Pikachu',
      Email: 'pikachu@email.com',
      Password: '122'
    }
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
