/////////////
//Dependencies
////////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const usersController = require('./controllers/users.js')

//mongoose
mongoose.connect('mongodb://localhost:27017/sixpackapp')
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

//middleware
app.use(express.urlencoded({newUrlParser: false}))
app.use(express.json())
app.use(express.static('public'))

//controllers
app.use('/users', usersController)

//////////
//Routes
////////
app.get('/', (req, res) => {
  res.render('index.ejs')
})







app.listen(3000, (req, res) => {
  console.log('listening');
})
