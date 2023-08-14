
const express = require('express');
const router = express.Router();
const { addReaction, removeReaction } = require('../controllers/reactions');

// POST add a reaction
router.post('/addReaction', addReaction);

// DELETE remove a reaction
router.delete('/removeReaction/:reactionId', removeReaction);

module.exports = router;
