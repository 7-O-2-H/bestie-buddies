const express = require('express');
const router = express.Router();
const reviewQuery = require('../db/queries/reviews');
const { pool } = require('../db/queries/pool');


/* GET reviews  */
router.get('/reviews', function(req, res) {
  reviewQuery.getReviews()
  .then(data=> {
    res.json(data)
  });
});

module.exports = router;