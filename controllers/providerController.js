const db = require('../models');
const Provider = db.Provider;

// Create a new provider
exports.create = async (req, res) => {
    try {
        const provider = await Provider.create(req.body);
        res.status(201).json(provider);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all providers
exports.findAll = async (req, res) => {
    try {
        const providers = await Provider.findAll();
        res.status(200).json(providers);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a provider by ID
exports.findOne = async (req, res) => {
    try {
        const provider = await Provider.findByPk(req.params.id);
        if (provider) {
            res.status(200).json(provider);
        } else {
            res.status(404).json({ error: 'Provider not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a provider by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Provider.update(req.body, {
            where: { ID_Penyedia: req.params.id }
        });
        if (updated) {
            const updatedProvider = await Provider.findByPk(req.params.id);
            res.status(200).json(updatedProvider);
        } else {
            res.status(404).json({ error: 'Provider not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a provider by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Provider.destroy({
            where: { ID_Penyedia: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Provider not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
