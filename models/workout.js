const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutShema = new Schema({
  name: String,
  description: String,
  reps: Number,
})

const Workout = mongoose.model('Workout', workoutShema)
module.exports= Workout