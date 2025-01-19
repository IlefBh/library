/*const mongoose = require('mongoose');

const ActivityLogSchema = new mongoose.Schema({
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'JWTUser', required: true },
    action: { type: String, required: true, enum: ['create', 'update', 'delete'] },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    timestamp: { type: Date, default: Date.now },
    details: { type: Object }, // Optional: Store additional details
});

module.exports = mongoose.model('ActivityLog', ActivityLogSchema);*/

const mongoose = require('mongoose');

const ActivityLogSchema = new mongoose.Schema({
    action: { type: String, required: true, enum: ['create', 'update', 'delete', 'book', 'cancel_booking', 'add_review'] }, // Added 'book' action
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    timestamp: { type: Date, default: Date.now },
    details: { type: Object }, // Optional: Store additional details
});

module.exports = mongoose.model('ActivityLog', ActivityLogSchema);
