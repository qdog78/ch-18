

const express = require('express');
const router = express.Router();
const { addFriend, removeFriend } = require('../controllers/controllers');

// POST add a friend
router.post('/addFriend', addFriend);

// DELETE remove a friend
router.delete('/removeFriend/:friendId', removeFriend);

module.exports = router;
