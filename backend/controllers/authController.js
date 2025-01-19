const JWTUser = require('../models/jwtUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const dotenv = require('dotenv');
const validator = require('validator');
const crypto = require('crypto');


dotenv.config();

exports.register = async (req, res) => {
    const { name, email, number, password, role } = req.body;

    // Input validation
    if (!name || !email || !number || !password || !role) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        return res.status(400).json({ msg: 'Name must contain only letters and spaces' });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ msg: 'Invalid email format' });
    }

    if (!/^\d{8}$/.test(number)) {
        return res.status(400).json({ msg: 'Number must be 8 digits' });
    }

    if (role !== 'admin' && role !== 'client') {
        return res.status(400).json({ msg: 'Invalid role' });
    }

    try {
        let user = await JWTUser.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Email already exists' });
        }

        const verificationToken = crypto.randomBytes(20).toString('hex');

        user = new JWTUser({ name, email, number, password, role, verificationToken });
        await user.save();

        const verificationUrl = `${req.protocol}://${req.get('host')}/auth/verify/${verificationToken}`;
        await sendEmail(email, 'Email Verification', `Please verify your email by clicking on the link: ${verificationUrl}`);

        res.json({ msg: 'Registration successful, please check your email to verify your account' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.verifyEmail = async (req, res) => {
    const { token } = req.params;

    try {
        const user = await JWTUser.findOne({ verificationToken: token });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid token' });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        res.json({ msg: 'Email verified successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await JWTUser.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        if (!user.isVerified) {
            return res.status(400).json({ msg: 'Please verify your email before logging in' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = { user: { id: user.id, role: user.role } };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ msg: 'Token generation failed' });
            }

            // Send the token as a response
            return res.status(200).json({
                msg: 'Login successful',
                token,
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


exports.sendResetCode = async (req, res) => {
    const { email } = req.body;

    try {
        let user = await JWTUser.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }

        const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
        user.resetCode = resetCode;
        await user.save();

        await sendEmail(email, 'Password Reset Code', `Your password reset code is ${resetCode}`);
        res.json({ msg: 'Reset code sent to email' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.verifyResetCode = async (req, res) => {
    const { email, resetCode, newPassword } = req.body;
    
    try {
        let user = await JWTUser.findOne({ email });
        if (!user || user.resetCode !== resetCode) {
            return res.status(400).json({ msg: 'Invalid reset code or email' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = newPassword;
        user.resetCode = undefined;
        await user.save();

        console.log(`Password for user ${user.email} has been updated.`);
        res.json({ msg: 'Password reset successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};








