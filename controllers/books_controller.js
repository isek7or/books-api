const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')
const bookSeedData = require('../models/seed-books.js')

// Index:
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error, could not load books.'
            })
        })
})

books.get('/seed', (req, res) => {
    Book.insertMany(bookSeedData)
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

// Show:
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            res.status(200).json(foundBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error, could not find book.'
            })
        })
})

// Create
books.post('/', (req, res) => {
    Book.create(req.body)
        .then(createdBook => {
            res.status(200).json(createdBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error, could not create book.'
            })
        })
})

// Update
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedBook => {
            res.status(200).json(updatedBook)
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error, could not update book.'
            })
        })
})

// Delete
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(deletedBook => {
            res.status(200).json({
                message: 'Succesfully deleted.'
            })
        })
        .catch(err => {
            res.status(400).json({
                message: 'Error, could not delete book.'
            })
        })
})

module.exports = books