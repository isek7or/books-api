// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema:
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

// Model and Export: 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book