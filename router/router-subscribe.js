const express = require('express');
const router = express.Router();
const subscribeController = require('../controllers/subscribe-controllers');

router.post('/subscribe', subscribeController.Subscribe);
router.get('/subscribes', subscribeController.getSubscribes);

module.exports = router;