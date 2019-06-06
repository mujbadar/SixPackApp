const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  gender: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  dob: Date,
  height: Number,
  weight: Number,
  workouts: [{
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }]
})


const User = mongoose.model('User', userSchema)
module.exports = User
