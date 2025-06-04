const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Route for user registration
router.post('/signup', authController.signup);

// Route for user login
router.post('/login', authController.login);

module.exports = router;