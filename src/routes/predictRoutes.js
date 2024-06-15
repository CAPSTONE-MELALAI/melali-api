const express = require('express');
const predictController = require('../controllers/predictController');

const router = express.Router();

router.post('/', predictController.predictRatings);

module.exports = router;
