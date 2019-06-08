const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const Workout = require('../models/workout.js')

///////////
//Routes
///////////

//profile page
router.get('/profile', (req, res) => {
  res.render('sessions/profile.ejs', {
    users: req.session.currentUser
  })
})

//login page
router.get('/login', (req, res) => {
  res.render('sessions/login.ejs')
})

router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if (req.body.password == foundUser.password) {
      req.session.currentUser = foundUser
      res.render('sessions/profile.ejs', {
        users: foundUser
      })
    } else {
      res.send('Sorry password didnt match')
    }
  })
})

//new user
router.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})

router.post('/new', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    res.redirect('/sessions/login')
    })
  })

//logout
router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

//edit
router.get('/edit', (req, res) => {
  User.findById(req.params.id, (error, foundUser) => {
    res.render('sessions/edit.ejs', {
      users: foundUser
    })
  })
})

router.put('/', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedUser) => {
    res.redirect('/')
  })
})

module.exports = router
