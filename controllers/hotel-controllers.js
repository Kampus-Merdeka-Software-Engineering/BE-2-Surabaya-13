const HotelModel = require ('../models').hotel;

const getHotels = async (req, res) => {
  try {
    const hotels = await HotelModel.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

module.exports = { getHotels };
