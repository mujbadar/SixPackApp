const express = require('express')
const router = express.Router()
const Workout = require('../models/workout.js')

////////////
//Routes
//////////

//index
router.get('/', (req, res) => {
  Workout.find({}, (error, allWorkouts) => {
    if (error) res.send('Not found')
    else res.render('workouts/index.ejs', {
      workouts: allWorkouts
    })
  })
})

//new
router.get('/new', (req, res) => {
  res.render('workouts/new.ejs')
})

//showpage
router.get('/:id', (req, res) => {
  Workout.findById(req.params.id, (error, foundWorkout) => {
    res.render('workouts/showpage.ejs', {
      workouts: foundWorkout
    })
  })
})

//create workout
router.post('/', (req, res) => {
  Workout.create(req.body, (err, createdWorkout) => {
    res.send('Workout created')
  })
})

//delete
router.delete('/:id', (req, res) => {
  Workout.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/workouts')
  })
})

//edit
router.get('/:id/edit', (req, res) => {
  Workout.findById(req.params.id, (error, foundWorkout) => {
    res.render('workouts/edit.ejs', {
      workouts: foundWorkout
    })
  })
})

router.put('/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedWorkout) => {
    res.redirect('/workouts')
  })
})

module.exports = router
