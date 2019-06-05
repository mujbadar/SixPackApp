const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  fname: String,
  lname: String,
  username: String,
  password: String,
  dob: Date,
  height: Number,
  weight: Number,
})


const User = mongoose.model('User', userSchema)
module.exports = User
