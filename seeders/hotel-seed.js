'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hotel', [{
      Name: 'Nusa Ceningan, Indonesia',
      Description: 'Nusa Ceningan, pintu gerbang menuju pesona kontemporer yang tak terlupakan. Jadikan liburan Anda lebih istimewa dengan menginap di akomodasi eksklusif kami, hanya dengan Rp4,398,219 per malam.'
      }],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hotel', null, {});
  }
};
