const express = require('express');
const router = express.Router();
const truckController = require('../controllers/truckController');
const authenticateJWT = require('../middleware/auth'); require('../middleware/auth');

router.post('/trucks', authenticateJWT, truckController.create);
router.get('/trucks', authenticateJWT, truckController.getAll);
router.get('/trucks/:id', authenticateJWT, truckController.getById);
router.put('/trucks/:id', authenticateJWT, truckController.updateById);
router.delete('/trucks/:id', authenticateJWT, truckController.deleteById);

module.exports = router;
