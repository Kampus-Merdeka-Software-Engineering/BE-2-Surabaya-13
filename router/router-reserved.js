const express = require('express');
const router = express.Router();
const reserveController = require('../controllers/reserved-controllers');

router.post('/reserve', reserveController.Reserve);
router.get('/reserves', reserveController.getReserve);

module.exports = router;