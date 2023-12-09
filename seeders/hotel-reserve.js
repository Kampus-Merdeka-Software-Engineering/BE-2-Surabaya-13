'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reserve', [{
      Name: 'Johsua',
      Email: 'joshh1@gmail.com',
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reserve', null, {});
  }
};
