/*const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, 
    isBooked: { type: Boolean, default: false },
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, required: true, min: 1, max: 5 },
            comment: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('Book', BookSchema);*/

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true }, // Store category name directly
    isBooked: { type: Boolean, default: false },
    image: { type: String, required: false },
    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: { type: Number, required: true, min: 1, max: 5 },
            comment: { type: String, required: true }
        }
    ]
});

module.exports = mongoose.model('Book', BookSchema);


