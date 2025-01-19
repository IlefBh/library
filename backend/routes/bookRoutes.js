const express = require('express');
const { addBook, updateBook, deleteBook, getBooks, getBook, bookBook, cancelBooking, addReview } = require('../controllers/bookController');
const { getRecentLogs } = require('../controllers/logController');
const upload = require('../middleware/upload');
const { addFavorite, removeFavorite } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware(['admin']),upload.single('image'), addBook);
router.put('/:id', authMiddleware, roleMiddleware(['admin']), updateBook);
router.delete('/:id', authMiddleware, roleMiddleware(['admin']), deleteBook);
router.get('/recent-logs', authMiddleware, getRecentLogs);
router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/book/:id', authMiddleware, bookBook);
router.post('/cancel/:id', authMiddleware, cancelBooking);
router.post('/review/:id', authMiddleware, addReview);
router.post('/favorite/:id', authMiddleware, addFavorite);
router.post('/unfavorite/:id', authMiddleware, removeFavorite);


module.exports = router;
