const HotelReserve = require ('../models').reserve;

const Reserve = async (req, res) => {
    try {
        const { Name, Email } = req.body;

        const reservation = new HotelReserve({
            Name,
            Email
        });

        const addReservation = await reservation.save();

        res.status(201).json({ message: 'Reservation created successfully', data: addReservation });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add reservation' });
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