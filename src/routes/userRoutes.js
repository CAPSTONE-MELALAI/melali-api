const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyTokenMiddleware = require('../middlewares/authMiddleware');

router.get('/:email', verifyTokenMiddleware, userController.getUser);
router.patch('/:email', verifyTokenMiddleware, userController.updateUser);

module.exports = router;
