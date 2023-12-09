'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('subscribe', [{
      Email : 'Josh1@gmail.com'
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subscribe', null, {});
  }
};
