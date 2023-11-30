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

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await HotelModel.update(req.body, { where: { id: req.params.id } });
    
    if (updatedHotel[0] === 1) {
      res.status(200).json({ message: 'Hotel updated successfully' });
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update hotel' });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await HotelModel.destroy({ where: { id: req.params.id } });
    
    if (deletedHotel === 1) {
      res.status(200).json({ message: 'Hotel deleted successfully' });
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete hotel' });
  }
};



module.exports = { getHotels, addHotels, updateHotel, deleteHotel };
