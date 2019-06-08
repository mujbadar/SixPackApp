const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutShema = new Schema({
<<<<<<< HEAD
  userID: String,
=======
  userID: {type: String, required: true},
>>>>>>> a214c5353c615b60cddcbbc7fb3ad18673a723f7
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
