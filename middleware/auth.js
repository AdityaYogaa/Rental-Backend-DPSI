const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                return res.sendStatus(403); // Forbidden jika token tidak valid
            }

            try {
                const user = await User.findByPk(decodedToken.id);
                if (!user) {
                    return res.sendStatus(404); // User tidak ditemukan
                }
                req.user = user;
                next();
            } catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    } else {
        res.sendStatus(401); // Unauthorized jika tidak ada token
    }
};

module.exports = authenticateJWT;
