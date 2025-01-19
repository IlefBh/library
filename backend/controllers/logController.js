const ActivityLog = require('../models/ActivityLog');

exports.getRecentLogs = async (req, res) => {
    try {
        const logs = await ActivityLog.find()
            .sort({ timestamp: -1 })
            .limit(4)
            .populate('bookId', 'title'); // Include book's title

        res.status(200).json({ logs });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};
