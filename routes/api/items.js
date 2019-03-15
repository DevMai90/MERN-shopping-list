// Use express router
const express = require('express');

// Create a router variable. Note that .Router() is part of the express object.
const router = express.Router();

// Item Model. We want to bring in the item model to make queries.
const Item = require('../../models/Item');

// Create routes - Make notes and description
// @route   GET api/items
// @desc    Get all items
// @access  Public

// Using router.get() because we are making routes. Would use server.get() if we were in the server.
// Not using /api/items because we are already in this route. So we use '/' since it is the end point. See the server.js file. Everything is already put in here.
router.get('/', (req, res) => {
  // Use Item model that we just created. Mongoose has .find() method
  // Mongoose has .sort() We are sorting by date descending (-1)
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
  // Construct an object to insert into the database
  // We brought in Item up above when we used require()
  const newItem = new Item({
    // Tha name will come from the body of the request. Using body-parder allows us to do this.
    name: req.body.name
  });

  // We created the new object, but now we have to save it.
  // Promise based so we need .then()
  // It gives us back the item we're saving. Now we're get going to have that item returned in json
  newItem.save().then(item => res.json(item));
});

// Must export module or else no other file will be able to read this.
module.exports = router;
