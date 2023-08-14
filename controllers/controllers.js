const User = require('../models/user');
const Thought = require('../models/thought');
const Reaction = require('../models/reaction');
const Friendship = require('../models/friendship');

module.exports = {
 
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create user' });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  },
  createThought: async (req, res) => {
    try {
      const newThought = await Thought.create(req.body);
      res.status(201).json(newThought);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create thought' });
    }
  },
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch thoughts' });
    }
  },

  createReaction: async (req, res) => {
    try {
      const newReaction = await Reaction.create(req.body);
      res.status(201).json(newReaction);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create reaction' });
    }
  },
  deleteReaction: async (req, res) => {
    try {
      await Reaction.findByIdAndDelete(req.params.reactionId);
      res.json({ message: 'Reaction deleted successfully' });
    } catch (error) {
      res.status(400).json({ error: 'Failed to delete reaction' });
    }
  },



  addFriend: async (req, res) => {
    try {
     
    } catch (error) {
      res.status(400).json({ error: 'Failed to add friend' });
    }
  },
  removeFriend: async (req, res) => {
    try {
      
    } catch (error) {
      res.status(400).json({ error: 'Failed to remove friend' });
    }
  },
  
};
