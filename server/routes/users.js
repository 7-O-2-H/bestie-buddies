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

router.put('/login', function(req, res) {

  const email = req.body.email;
  const password = req.body.password;

  userQueries.getUserByEmail(email)
  .then(data => {
    return res.json(data);
  });
});

module.exports = router;
