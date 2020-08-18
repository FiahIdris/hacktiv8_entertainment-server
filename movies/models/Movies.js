const { getDatabase } = require('../config/dbConnection')

class Movies {
  static database() {
    return getDatabase().collection('movies')
  }

  static find() {
    return this.database().find().toArray()
  }

  static create(data) {
    return this.database().insertOne(data)
  }

  static update(filter, documentUpdate) {
    return this.database().updateOne(filter, documentUpdate)
  }

  static delete(filter) {
    return this.database().deleteOne(filter)
  }
}

module.exports = Movies
