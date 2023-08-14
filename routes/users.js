

const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/controllers');

// POST create a new user
router.post('/createUser', createUser);

// GET all users
router.get('/getAllUsers', getAllUsers);

// Add more routes for updating and deleting users

module.exports = router;
