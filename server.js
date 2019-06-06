/////////////
//Dependencies
////////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const methodOverride = require('method-override')


//controllers
const workoutsController = require('./controllers/workouts.js')
const sessionsController = require('./controllers/sessions.js')

//mongoose
mongoose.connect('mongodb://localhost:27017/sixpackapp')
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
})

//session
app.use(session({
  secret: 'swole',
  resave: false,
  saveUninitialized: false
}))

//middleware
app.use(express.urlencoded({useNewUrlParser: false}))
app.use(express.json())
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use('/workouts', workoutsController)
app.use('/sessions', sessionsController)

//////////
//Routes
////////
app.get('/', (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

//Listen
app.listen(3000, (req, res) => {
  console.log('listening');
})
