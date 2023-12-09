const express = require('express');
const router = express.Router();
const subscribeController = require('../controllers/subscribes-controllers');

router.post('/subscribe', subscribeController.Subscribe);
router.get('/subscribes', subscribeController.getSubscribes);

module.exports = router;