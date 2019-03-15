// Use express router
const express = require('express');

// Create a router variable. Note that .Router() is part of the express object.
const router = express.Router();

// Item Model. We want to bring in the item model to make queries.
const Item = require('../../models/Items');

// Create routes - Make notes and description
// @route   GET api/items
// @desc    Get all items
// @access  Public

// Using router.get() because we are making routes. Would use server.get() if we were in the server.
// Not using /api/items because we are already in this route. See the server.js file. Everything is already put in here.
router.get('/', (req, res) => {
  // Use Item model that we just created. Mongoose has .find() method
  // Mongoose has .sort() We are sorting by date descending
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// Must export module or else no other file will be able to read this.
module.exports = router;
