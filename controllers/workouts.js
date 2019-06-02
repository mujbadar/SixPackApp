const express = require('express')
const router = express.Router()
const Workout = require('../models/workout.js')

router.get('/new', (req, res) => {
  res.render('workouts/new.ejs')
})

router.post('/', (req, res) => {
  Workout.create(req.body, (err, createdWorkout) => {
    res.send('Workout created')
  })
})


module.exports = router
