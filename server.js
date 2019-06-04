/////////////
//Dependencies
////////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')

//controllers
const usersController = require('./controllers/users.js')
const workoutsController = require('./controllers/workouts.js')
const sessionsController = require('./controllers/sessions.js')

//mongoose
mongoose.connect('mongodb://localhost:27017/sixpackapp')
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

//middleware
app.use(express.urlencoded({useNewUrlParser: false}))
app.use(express.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))

//controller routes
app.use('/users', usersController)
app.use('/workouts', workoutsController)
app.use('/sessions', sessionsController)

//////////
//Routes
////////
app.get('/', (req, res) => {
  res.render('index.ejs')
})

//Listen
app.listen(3000, (req, res) => {
  console.log('listening');
})
