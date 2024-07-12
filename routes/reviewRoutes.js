const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authenticateJWT = require('../middleware/auth'); require('../middleware/auth');

router.post('/reviews', authenticateJWT, reviewController.create);
router.get('/reviews', authenticateJWT, reviewController.getAll);
router.get('/reviews/:id', authenticateJWT, reviewController.getById);
router.put('/reviews/:id', authenticateJWT, reviewController.updateById);
router.delete('/reviews/:id', authenticateJWT, reviewController.deleteById);

module.exports = router;
