const express = require('express')
const router = express.Router()
const User = require('../models/user.js')


router.get('/login', (req, res) => {
  res.render('sessions/login.ejs')
})

router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if (req.body.password == foundUser.password) {
      res.send('logged in')
    } else {
      res.send('Sorry password didnt match')
    }
  })
})

module.exports = router
