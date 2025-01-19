const Category = require('../models/Category');

// Add a new category (Admin only)
exports.addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ msg: 'Category name is required' });
        }

        // Check if category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ msg: 'Category already exists' });
        }

        const category = new Category({ name });
        await category.save();

        res.status(201).json({ msg: 'Category added successfully', category });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({ categories });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};
