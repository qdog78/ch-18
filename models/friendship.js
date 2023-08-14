

const mongoose = require('mongoose');

const friendshipSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  friend: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  createdAt: { type: Date, default: Date.now },
});

const Friendship = mongoose.model('Friendship', friendshipSchema);

module.exports = Friendship;
