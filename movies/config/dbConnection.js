const { MongoClient } = require('mongodb')
const uri = 'mongodb://localhost:27017'

let database = null

async function createMongoConnection() {
  try {
    const client = new MongoClient(uri, { useUnifiedTopology: true })

    await client.connect()

    database = client.db('movies')
    return database

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createMongoConnection,
  getDatabase() {
    return database
  }
}
