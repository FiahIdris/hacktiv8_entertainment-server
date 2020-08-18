const Movies = require('../models/Movies')
const { ObjectId } = require('mongodb')

class Controller {

  static async fetchMovies(req, res, next) {
    try {
      const movies = await Movies.find()
      // console.log('=============masuk controllers', movies)

      res.send(movies)
    } catch (err) {
      console.log(err)
    }
  }

  static async createMovie(req, res, next) {

    try {
      const create = await Movies.create(req.body)
      console.log(create.ops[ 0 ])
      res.status(201).send('success adding a new movie on your MongoDb')
    } catch (error) {
      console.log(error)
    }
  }

  static async updateMovie(req, res, next) {
    // console.log(id)
    // console.log(req.body)
    try {
      const id = new ObjectId(req.params.id)
      const filter = {
        _id: id
      }

      const data = {
        $set: req.body
      }
      const update = await Movies.update(filter, data)
      // console.log(update)
      res.status(201).json('success updating movie with id ' + id)

    } catch (error) {
      console.log(error)
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const id = new ObjectId(req.params.id)

      const filter = {
        _id: id
      }
      const remove = await Movies.delete(filter)

      res.status(200).send('success removing movie with id ' + id)

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = Controller