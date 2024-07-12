const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

// Register (Create a user)
exports.createUser = async (req, res) => {
    try {
        const { Nama_Pengguna, Alamat_Email, Nomor_Telepon, Metode_Pembayaran, password } = req.body;
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            Nama_Pengguna,
            Alamat_Email,
            Nomor_Telepon,
            Metode_Pembayaran,
            password: hashedPassword
        });

        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login
exports.loginUser = async (req, res) => {
    const { Alamat_Email, password } = req.body;

    try {
        const user = await User.findOne({ where: { Alamat_Email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        const token = jwt.sign({ id: user.ID_Pengguna }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all users (for testing, requires authentication middleware in production)
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a user by ID (for testing, requires authentication middleware in production)
exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a user by ID (for testing, requires authentication middleware in production)
exports.updateUser = async (req, res) => {
    try {
        const { Nama_Pengguna, Alamat_Email, Nomor_Telepon, Metode_Pembayaran, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const [updated] = await User.update({
            Nama_Pengguna,
            Alamat_Email,
            Nomor_Telepon,
            Metode_Pembayaran,
            password: hashedPassword
        }, {
            where: { ID_Pengguna: req.params.id }
        });

        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a user by ID (for testing, requires authentication middleware in production)
exports.deleteUser = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { ID_Pengguna: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
