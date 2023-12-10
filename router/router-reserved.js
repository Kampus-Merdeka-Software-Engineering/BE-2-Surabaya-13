const express = require('express');
const router = express.Router();
const reserveController = require('../controllers/reserved-controllers');

router.post('/hotel/reserved', reserveController.Reserve);
router.get('/hotel/reserveds', reserveController.getReserve);

module.exports = router;