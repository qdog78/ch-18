const db = require ("../config/config")
const mongoose = require('mongoose');
const User = require('../models/user');
const Thought = require('../models/thought');


// Sample data
const sampleUsers = [
  { username: 'user1' },
  { username: 'user2' },
  { username: 'user3' },
];

const sampleThoughts = [
  { text: 'Thought 1 from user 1' },
  { text: 'Thought 2 from user 1' },
  { text: 'Thought 1 from user 2' },
];

// Seed function
const seed = async () => {
  try {
    
    await User.deleteMany();
    await Thought.deleteMany();

    // Insert sample users
    const createdUsers = await User.create(sampleUsers);
    console.log('Sample users inserted:', createdUsers);

    // Insert sample thoughts
    const createdThoughts = await Thought.create(sampleThoughts);
    console.log('Sample thoughts inserted:', createdThoughts);
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
};

// Call the seed function
seed();
