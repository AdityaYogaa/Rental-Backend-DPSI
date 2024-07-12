const db = require('../models');
const Truck = db.Truck;

// Create a truck
exports.create = async (req, res) => {
    try {
        const truck = await Truck.create(req.body);
        res.status(201).json(truck);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all trucks
exports.getAll = async (req, res) => {
    try {
        const trucks = await Truck.findAll();
        res.status(200).json(trucks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get truck by ID
exports.getById = async (req, res) => {
    try {
        const truck = await Truck.findByPk(req.params.id);
        if (truck) {
            res.status(200).json(truck);
        } else {
            res.status(404).json({ error: 'Truck not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update truck by ID
exports.updateById = async (req, res) => {
    try {
        const [updated] = await Truck.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedTruck = await Truck.findByPk(req.params.id);
            res.status(200).json(updatedTruck);
        } else {
            res.status(404).json({ error: 'Truck not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete truck by ID
exports.deleteById = async (req, res) => {
    try {
        const deleted = await Truck.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Truck not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
