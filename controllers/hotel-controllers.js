const HotelModel = require ('../models').hotel;
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

const getHotels = async (req, res) => {
  try {
    const hotels = await HotelModel.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

const addHotels = async (req, res) => {
  try {
    res.status(201).json({ message: 'Hotel added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add hotel' });
  }
};

module.exports = { getHotels, addHotels };
