const HotelReserve = require ('../models').reserved;

const Reserve = async (req, res) => {
  try {
    const { Name, Email, Date } = req.body;

    if (!Name || !Email | !Date) {
      return res.status(400).json({ message: 'Name, Email and Date are required fields' });
    }

    const hotel = new HotelReserve({
      Name,
      Email,
      Date
    });

    const addHotel = await hotel.save();

    res.status(201).json({ message: 'Hotel created successfully', data: addHotel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add hotel', error: error.message });
  }
};

  const getReserve = async (req, res) => {
    try {
        const reservations = await HotelReserve.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get reservations' });
    }
  }

  module.exports ={Reserve, getReserve}