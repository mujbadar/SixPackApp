const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('sessions/login.ejs')
})

module.exports = router
