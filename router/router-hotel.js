const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel-controllers');

router.get('/hotels', hotelController.getHotels);
router.get('/hotels/:id', hotelController.getHotelsbyID);
router.post('/hotel', hotelController.addHotels);
router.put('/hotel/:id', hotelController.updateHotel);
router.delete('/hoteld', hotelController.deleteHotel);
router.delete('/hoteld/:id', hotelController.deleteHotelById);

module.exports = router;
