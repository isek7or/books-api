// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Books API')
})

//Connect to your mongodb and listen on port given by env
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

// LISTEN
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})