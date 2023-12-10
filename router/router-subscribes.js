const express = require('express');
const router = express.Router();
const subscribeController = require('../controllers/subscribes-controllers');

router.post('/hotel/subscribe', subscribeController.Subscribe);
router.get('/hotel/subscribes', subscribeController.getSubscribes);

module.exports = router;