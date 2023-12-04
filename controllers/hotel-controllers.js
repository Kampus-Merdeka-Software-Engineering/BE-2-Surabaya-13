const Hotel = require ('../models').hotel;

const addHotels = async (req, res) => {
  try {
    const { Name, Description, Price } = req.body;

    const hotel = new Hotel({
      Name,
      Description,
      Price
    });

    const addHotel = await hotel.save();
    res.status(201).json({ message: 'Hotel created successfully', data: addHotel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add hotel' });
  }
};

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

const getHotelsbyID = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json({ message: 'Successfully retrieved hotel', data: hotel });
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
};

const updateHotel = async (req, res) => {
  try {
    if (!req.hotel || !req.hotel.hotelId) {
      return res.status(400).json({ message: 'Invalid request, missing hotelId' });
    }

    const hotelId = req.hotel.hotelId;

    const dataHotel = await Hotel.findOne({ hotelId });

    if (!dataHotel) {
      return res.status(404).json({ message: 'Hotel user not found' });
    }

    const updateHotel = {
      Name: req.body.Name,
      Description: req.body.Description,
      Price: req.body.Price,
    };

    const updatedataHotel = await Hotel.findOneAndUpdate(
      { hotelId },
      updateHotel,
      { new: true }
    );

    if (!updatedataHotel) {
      return res.status(404).json({ error: 'Data hotel not found.' });
    }

    res.status(200).json({ status: 'Success', message: 'Data hotel updated successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update hotel' });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const deletedHotel = await Hotel.destroy({ where: { id: req.params.id } });
    
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



module.exports = { addHotels, getHotels, getHotelsbyID, updateHotel, deleteHotel };
