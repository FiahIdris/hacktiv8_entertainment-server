const express = require('express')
const router = express.Router()
const movies = require('./movies')

router.get('/', function (req, res) {
  res.send('hello world')
})

router.use('/movies', movies)
module.exports = router