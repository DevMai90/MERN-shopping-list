// Bring in what we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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

// Need to run server. May deploy this to Heroku. Needs to add env.PORT
const port = process.env.PORT || 5000;

// Want our app to listen on that port. Can take a callback if we want something to happen.
app.removeAllListeners(port, () =>
  console.log(`Server started on port ${port}`)
);
