'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('subscribes', [{
        Email: 'JohnDoe@gmail.com'
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subscribes', null, {});
  }
};
