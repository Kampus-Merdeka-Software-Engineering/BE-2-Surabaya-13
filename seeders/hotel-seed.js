'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hotel', [{
      Name: 'Badung, Indonesia',
      Description: 'Book your gateway to this contem..',
      Price: 'Rp16,161,062 night'
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hotel', null, {});
  }
};
