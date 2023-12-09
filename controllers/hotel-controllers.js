const Hotel = require ('../models').hotel;
const Validator = require("fastest-validator");
const v = new Validator();

const addHotels = async (req, res) => {
  try {
    const { Name, Description } = req.body;

    const hotel = new Hotel({
      Name,
      Description,
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
    res.status(500).json({message: 'Failed to get hotel'});
  }
};

const getHotelsbyID = async (req, res) => {

  const id = req.params.id;

  try {
    let hotel = await Hotel.findByPk(id);

    if (!hotel) {
      return res.status(404).json({ status: 404, message: "Data Hotel not found" });
    } else {
      return res.json({ status: 200, message: "Success get data Hotel", data: hotel });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Failed to get hotel'});
  }
}

const updateHotel = async (req, res) => {
  try {
    const id = req.params.id;
    let hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ status: 404, message: "Data Hotel not found" });
    }

    const schema = {
      Name: "string|optional",
      Description: "string|optional",
    };
    const validate = v.validate(req.body, schema);
    if (validate.length) {
      return res.status(400).json(validate);
    }

    hotel = await hotel.update(req.body);
    res.json({
      status: 200,
      message: "Success update data Hotel",
      data: hotel,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Failed to update hotel'});
  }
};

const deleteHotel = async (req, res) => {
  try {
    const deletedHotelsCount = await Hotel.destroy({ where: {} });

    if (deletedHotelsCount > 0) {
      res.status(200).json({ message: 'All Hotel data deleted successfully' });
    } else {
      res.status(404).json({ message: 'No Hotel data found to delete' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete Hotel data' });
  }
};

const deleteHotelById = async (req, res) => {
  const id = req.params.id;
  try {
    let hotel = await Hotel.findByPk(id);
    if (!hotel) {
      return res.status(404).json({ status: 404, message: "Data Hotel not found" });
    }

    await hotel.destroy();
    res.json({
      status: 200,
      message: "Success delete data Hotel",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, message: "Failed to delete hotel" });
  }
};



module.exports = { addHotels, getHotels, getHotelsbyID, updateHotel, deleteHotel, deleteHotelById };