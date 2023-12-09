const HotelReserve = require ('../models').reserved;

const Reserve = async (req, res) => {
  try {
    const { Name, Email } = req.body;

    if (!Name || !Email) {
      return res.status(400).json({ message: 'Name and Email are required fields' });
    }

    const hotel = new HotelReserve({
      Name,
      Email,
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