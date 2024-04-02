const express = require('express');
const { signup } = require('../controllers/auth.controller.js'); // Import using require

const router = express.Router();

router.post("/signup",signup);

module.exports = router; // Export using module.exports



