const db = require('../models');
const Promo = db.Promo;

// Create a promo
exports.createPromo = async (req, res) => {
    try {
        const promo = await Promo.create(req.body);
        res.status(201).json(promo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all promos
exports.getPromos = async (req, res) => {
    try {
        const promos = await Promo.findAll();
        res.status(200).json(promos);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a promo by ID
exports.getPromo = async (req, res) => {
    try {
        const promo = await Promo.findByPk(req.params.id);
        if (promo) {
            res.status(200).json(promo);
        } else {
            res.status(404).json({ error: 'Promo not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a promo by ID
exports.updatePromo = async (req, res) => {
    try {
        const [updated] = await Promo.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPromo = await Promo.findByPk(req.params.id);
            res.status(200).json(updatedPromo);
        } else {
            res.status(404).json({ error: 'Promo not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a promo by ID
exports.deletePromo = async (req, res) => {
    try {
        const deleted = await Promo.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Promo not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
