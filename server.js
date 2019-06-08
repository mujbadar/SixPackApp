/////////////
//Dependencies
////////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const methodOverride = require('method-override')
const db = mongoose.connection
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sixpackapp'

//controllers
const workoutsController = require('./controllers/workouts.js')
const sessionsController = require('./controllers/sessions.js')

//mongoose
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});


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
app.listen(PORT, () => {
  console.log('listening on port :', PORT);
})
