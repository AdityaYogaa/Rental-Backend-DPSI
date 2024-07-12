const db = require('../models');
const Review = db.Review;

// Create a review
exports.create = async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all reviews
exports.getAll = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get review by ID
exports.getById = async (req, res) => {
    try {
        const review = await Review.findByPk(req.params.id);
        if (review) {
            res.status(200).json(review);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update review by ID
exports.updateById = async (req, res) => {
    try {
        const [updated] = await Review.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedReview = await Review.findByPk(req.params.id);
            res.status(200).json(updatedReview);
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete review by ID
exports.deleteById = async (req, res) => {
    try {
        const deleted = await Review.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Review not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
