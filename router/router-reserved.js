const express = require('express');
const router = express.Router();
const reserveController = require('../controllers/reserved-controllers');

router.post('/reserved', reserveController.Reserve);
router.get('/reserveds', reserveController.getReserve);

module.exports = router;