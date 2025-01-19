const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        enum: [
            "Fiction",
            "Non-Fiction",
            "Mystery/Thriller",
            "Romance",
            "Science Fiction",
            "Fantasy",
            "Horror",
            "Adventure",
            "Historical",
            "Self-Help"
        ],
        message: '{VALUE} is not a valid category'
    }
});

module.exports = mongoose.model('Category', CategorySchema);

