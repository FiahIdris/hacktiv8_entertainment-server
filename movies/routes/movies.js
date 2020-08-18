const express = require('express')
const router = express.Router()
const Controller = require('../controllers/movies')

router.get('/', Controller.fetchMovies)
router.post('/', Controller.createMovie)
router.put('/:id', Controller.updateMovie)
router.delete('/:id', Controller.deleteMovie)


module.exports = router