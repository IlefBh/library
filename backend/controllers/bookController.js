const Book = require('../models/book');
const sendEmail = require('../utils/sendEmail');

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ books });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get Single Book (Public)
exports.getBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        res.status(200).json({ book });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

const ActivityLog = require('../models/ActivityLog');

const Category = require('../models/Category');
const jwtUser = require('../models/jwtUser');

/*exports.addBook = async (req, res) => {
    try {
        const { title, author, description, category } = req.body;

        // Check if the category exists in the database
        const existingCategory = await Category.findOne({ name: category });
        if (!existingCategory) {
            return res.status(400).json({ msg: 'Invalid category' });
        }

        // Create the book with the category name instead of the ID
        const newBook = new Book({ title, author, description, category: existingCategory.name });
        await newBook.save();

        res.status(201).json({ msg: 'Book added successfully', book: newBook });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};



exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Find and update the book
        const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        // Log the update action
        await ActivityLog.create({
            adminId: req.user.id,
            action: 'update',
            bookId: updatedBook._id,
            details: updates, // Optionally log the updates
        });

        res.status(200).json({ msg: 'Book updated successfully', book: updatedBook });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the book
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        // Log the delete action
        await ActivityLog.create({
            adminId: req.user.id,
            action: 'delete',
            bookId: deletedBook._id,
            details: { title: deletedBook.title, author: deletedBook.author },
        });

        res.status(200).json({ msg: 'Book deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};*/



exports.bookBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.user._id; 
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }
        if (book.isBooked) {
            return res.status(400).json({ msg: 'Book is already booked' });
        }
        book.isBooked = true;
        book.bookedBy = userId;
        await book.save();
        const log = new ActivityLog({
            action: 'book',
            bookId: bookId,
            details: { message: 'Book booked by client' }
        });
        await log.save();

        res.status(200).json({ msg: 'Book successfully booked', book });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }

};

exports.cancelBooking = async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.user._id;

        // Find the book
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        // Check if the book is booked
        if (!book.isBooked) {
            return res.status(400).json({ msg: 'Book is not booked' });
        }

        // Cancel the booking
        book.isBooked = false;
        book.bookedBy = null;
        await book.save();

        // Log the cancellation action
        await ActivityLog.create({
            action: 'cancel_booking',
            bookId: bookId,
            details: { message: 'Booking canceled by client' }
        });

        res.status(200).json({ msg: 'Booking successfully canceled', book });
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.addReview = async (req, res) => {
    try {
        const { id } = req.params; // Book ID
        const { rating, comment } = req.body; 
        const userId = req.user._id; // Get user ID from the authenticated request

        // Validate rating
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ msg: 'Rating must be between 1 and 5' });
        }

        // Find the book
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        // Add new review
        const newReview = { user: userId, rating, comment };
        book.reviews.push(newReview);
        await book.save();

        // Log the review action
        await ActivityLog.create({
            action: 'add_review',
            bookId: id,
            details: { userId, rating, comment }
        });

        res.status(201).json({ msg: 'Review added successfully', book });
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.addBook = async (req, res) => {
    try {
        const { title, author, description, category } = req.body;

        // Check if the category exists in the database
        const existingCategory = await Category.findOne({ name: category });
        if (!existingCategory) {
            return res.status(400).json({ msg: 'Invalid category' });
        }

        // Create the book with the category name instead of the ID
        const newBook = new Book({ title, author, description, category: existingCategory.name });
        await newBook.save();

        // Send email to all clients
        const clients = await jwtUser.find({ role: 'client' }); // Assuming role 'client' for regular users
        clients.forEach(client => {
            sendEmail(
                client.email,
                'New Book Added',
                `A new book titled "${title}" has been added to the collection. Check it out!`
            );
        });

        res.status(201).json({ msg: 'Book added successfully', book: newBook });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        // Find and update the book
        const updatedBook = await Book.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        // Log the update action
        await ActivityLog.create({
            adminId: req.user.id,
            action: 'update',
            bookId: updatedBook._id,
            details: updates, // Optionally log the updates
        });

        // Send email to all clients
        const clients = await User.find({ role: 'client' });
        clients.forEach(client => {
            sendEmail(
                client.email,
                'Book Updated',
                `The book titled "${updatedBook.title}" has been updated. Check it out!`
            );
        });

        res.status(200).json({ msg: 'Book updated successfully', book: updatedBook });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the book
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ msg: 'Book not found' });
        }

        // Log the delete action
        await ActivityLog.create({
            adminId: req.user.id,
            action: 'delete',
            bookId: deletedBook._id,
            details: { title: deletedBook.title, author: deletedBook.author },
        });

        // Send email to all clients
        const clients = await User.find({ role: 'client' });
        clients.forEach(client => {
            sendEmail(
                client.email,
                'Book Deleted',
                `The book titled "${deletedBook.title}" has been deleted from the collection.`
            );
        });

        res.status(200).json({ msg: 'Book deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};