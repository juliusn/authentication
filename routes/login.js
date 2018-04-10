const express = require('express');
const passport = require('passport');
const router = new express.Router();

router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
      res.send('authenticated!');
    });

module.exports = router;
