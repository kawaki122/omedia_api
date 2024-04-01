const express = require('express');
const router = express.Router();
const { getAll } = require('../../controllers/user.controller');

router.get('/', getAll);

// Add more route definitions for other operations
// (e.g., POST, PUT, DELETE) with appropriate handlers

module.exports = router;
