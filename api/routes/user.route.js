const userController = require('../controllers/user.controller');

const express = require('express');

const router = express.Router();

// Define your routes
router.get('/test', (req, res) => {
    res.json({ message: 'User Route Test' });
});

module.exports = router;
