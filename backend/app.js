const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const session = require('express-session');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes')
const categoryRoutes = require('./routes/categoryRoutes');
const path = require('path');
dotenv.config();
const app = express();
connectDB();
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/auth', authRoutes);
app.use('/book', bookRoutes)
app.use('/category', categoryRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


