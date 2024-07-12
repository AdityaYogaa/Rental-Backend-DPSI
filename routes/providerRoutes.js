const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');
const authenticateJWT = require('../middleware/auth'); require('../middleware/auth');

router.post('/providers', authenticateJWT, providerController.create);
router.get('/providers', authenticateJWT, providerController.findAll);
router.get('/providers/:id', authenticateJWT, providerController.findOne);
router.put('/providers/:id', authenticateJWT, providerController.update);
router.delete('/providers/:id', authenticateJWT, providerController.delete);

module.exports = router;
