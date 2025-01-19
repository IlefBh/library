const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const roleMiddleware = require('../middleware/roleMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, roleMiddleware(['admin']), categoryController.addCategory);
router.get('/', categoryController.getCategories);

module.exports = router;
