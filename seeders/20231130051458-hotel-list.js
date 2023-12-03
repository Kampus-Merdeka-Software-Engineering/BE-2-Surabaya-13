'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('hotel', [{
      Name: 'Badung, Indonesia',
      Description: 'Book your gateway to this contem..',
      Price: 'Rp16,161,062 night',
      createdAt: new Date(),
      updatedAt: new Date()
      },

      {
      Name: 'Canggu, Indonesia',
      Description: 'Book your gateway to this contem..',
      Price: 'Rp24,644,818 night',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      Name: 'Kutuh, Indonesia',
      Description: 'Book your gateway to this contem..',
      Price: 'Rp7,329,305 night',
      createdAt: new Date(),
      updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hotel', null, {});
  }
};
