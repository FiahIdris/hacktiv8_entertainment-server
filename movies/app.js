require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes/index.js')
const errorHandler = require('./middlewares/errorHandlers')
const { createMongoConnection } = require('./config/dbConnection')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', routes)
// app.use(errorHandler)


createMongoConnection().then(() => {
  app.listen(PORT, () => {
    console.log('Running on http://localhost:' + PORT)
  })
})
