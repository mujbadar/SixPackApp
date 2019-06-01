/////////////
//Dependencies
////////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')



//////////
//Routes
////////
app.get('/', (req, res) => {
  res.send('Its Fitness Time!')
})







app.listen(3000, (req, res) => {
  console.log('listening');
})
