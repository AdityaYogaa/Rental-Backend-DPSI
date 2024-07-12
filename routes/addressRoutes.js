const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
const authenticateJWT = require('../middleware/auth'); require('../middleware/auth');

router.post('/addresses', authenticateJWT, addressController.createAddress);
router.get('/addresses', authenticateJWT, addressController.getAddresses);
router.get('/addresses/:id', authenticateJWT, addressController.getAddress);
router.put('/addresses/:id', authenticateJWT, addressController.updateAddress);
router.delete('/addresses/:id', authenticateJWT, addressController.deleteAddress);

module.exports = router;
