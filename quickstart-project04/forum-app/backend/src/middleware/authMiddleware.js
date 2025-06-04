const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token is not valid.' });
        }

        req.user = decoded;
        next();
    });
};

const checkUserExists = async (req, res, next) => {
    const user = await User.findById(req.user.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }
    next();
};

module.exports = {
    verifyToken: authMiddleware,
    checkUserExists,
};