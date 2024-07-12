const express = require('express');
const router = express.Router();
const promoController = require('../controllers/promoController');
const authenticateJWT = require('../middleware/auth'); require('../middleware/auth');

router.post('/promos', authenticateJWT, promoController.createPromo);
router.get('/promos', authenticateJWT, promoController.getPromos);
router.get('/promos/:id', authenticateJWT, promoController.getPromo);
router.put('/promos/:id', authenticateJWT, promoController.updatePromo);
router.delete('/promos/:id', authenticateJWT, promoController.deletePromo);

module.exports = router;
