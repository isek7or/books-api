const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

// Index:
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.json(foundBooks)
        })
})

// Show:
books.get('/:name', (req, res) => {
    Book.findOne({ name: req.params.name.toLowerCase() })
        .then(foundBooks => {
            res.json(foundBooks)
        })
})

module.exports = books