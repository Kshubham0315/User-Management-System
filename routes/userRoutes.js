const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Public route
router.get('/', userController.getAllUsers);

// Protected route
router.post('/add', authMiddleware, userController.addUser);

module.exports = router;
