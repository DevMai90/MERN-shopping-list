// Bring in what we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

// Initialize express into a variable
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB using mongoose. Returns a promise. Run error if there is one
// Add , { useNewUrlParser: true }
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use Routes
// This is saying that anything that uses the first parameter will refer to items variable
app.use('/api/items', items);

// Serve static assets if in production
// If statement checks our node enviornment
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Need to run server. May deploy this to Heroku. Needs to add env.PORT
const port = process.env.PORT || 5000;

// Want our app to listen on that port. Can take a callback if we want something to happen.
app.listen(port, () => console.log(`Server started on port ${port}`));
