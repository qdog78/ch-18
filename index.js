const express = require('express');
const userRoutes = require('./routes/users');
const thoughtRoutes = require('./routes/thoughts');
const reactionRoutes = require('./routes/reactions');
const friendshipRoutes = require('./routes/friendships');
const db = require ("./config/config")


const app = express();
const port = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use (express.urlencoded({extended: true}))

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use('/api/reactions', reactionRoutes);
app.use('/api/friendships', friendshipRoutes);

// Start the server
db.once("open", () => {
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
})


