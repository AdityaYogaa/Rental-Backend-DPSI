const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authenticateJWT = require('../middleware/auth'); require('../middleware/auth');

router.post('/orders', authenticateJWT, orderController.createOrder);
router.get('/orders', authenticateJWT, orderController.getOrders);
router.get('/orders/:id', authenticateJWT, orderController.getOrder);
router.put('/orders/:id', authenticateJWT, orderController.updateOrder);
router.delete('/orders/:id', authenticateJWT, orderController.deleteOrder);

module.exports = router;
