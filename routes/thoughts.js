

const express = require('express');
const router = express.Router();
const { createThought, getAllThoughts } = require('../controllers/controllers');

router.post('/createThought', createThought);

router.get('/getAllThoughts', getAllThoughts);

// Add more routes for updating and deleting thoughts

module.exports = router;
