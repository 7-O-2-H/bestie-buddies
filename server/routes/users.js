const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const { pool } = require('../db/queries/pool');


/* GET users  */
router.get('/users', function(req, res) {
  userQueries.getAllUsers()
  .then(data=> {
    res.json(data)
  });
});

module.exports = router;
