const db = require('../models');
const Order = db.Order;

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get an order by ID
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
    try {
        const [updated] = await Order.update(req.body, {
            where: { ID_Pesanan: req.params.id }
        });
        if (updated) {
            const updatedOrder = await Order.findByPk(req.params.id);
            res.status(200).json(updatedOrder);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    try {
        const deleted = await Order.destroy({
            where: { ID_Pesanan: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
