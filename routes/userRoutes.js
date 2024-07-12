const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../middleware/auth');

router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/users', authenticateJWT, userController.getUsers); // Menggunakan middleware untuk autentikasi
router.get('/users/:id', authenticateJWT, userController.getUser); // Menggunakan middleware untuk autentikasi
router.put('/users/:id', authenticateJWT, userController.updateUser); // Menggunakan middleware untuk autentikasi
router.delete('/users/:id', authenticateJWT, userController.deleteUser); // Menggunakan middleware untuk autentikasi

module.exports = router;
