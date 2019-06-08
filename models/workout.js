const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutShema = new Schema({
  userID: String,
  name: {type: String, required: true},
  description: {type: String, required: true},
  type: {type: String, required: true},
  time: String,
  excercises: {
    title: [String],
    reps: [Number]
  },
  sets: Number
})

const Workout = mongoose.model('Workout', workoutShema)
module.exports= Workout
