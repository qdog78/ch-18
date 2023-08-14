// controllers/reactions.js
const Reaction = require('../models/reaction');

// Controller function to add a reaction
exports.addReaction = async (req, res) => {
  try {
    const { userId, thoughtId, emoji } = req.body;

    const newReaction = await Reaction.create({
      user: userId,
      thought: thoughtId,
      emoji: emoji,
    });

    res.json(newReaction);
  } catch (error) {
    console.error('Error adding reaction:', error);
    res.status(500).json({ error: 'An error occurred while adding the reaction.' });
  }
};

// Controller function to remove a reaction
exports.removeReaction = async (req, res) => {
  try {
    const { reactionId } = req.params;

    const removedReaction = await Reaction.findByIdAndDelete(reactionId);

    if (!removedReaction) {
      return res.status(404).json({ error: 'Reaction not found.' });
    }

    res.json({ message: 'Reaction removed successfully.' });
  } catch (error) {
    console.error('Error removing reaction:', error);
    res.status(500).json({ error: 'An error occurred while removing the reaction.' });
  }
};
