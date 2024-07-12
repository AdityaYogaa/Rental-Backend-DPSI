const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Sesuaikan dengan lokasi file konfigurasi Sequelize Anda

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Truck = require('./truck')(sequelize, Sequelize.DataTypes);
const Provider = require('./provider')(sequelize, Sequelize.DataTypes);
const Order = require('./order')(sequelize, Sequelize.DataTypes);
const Address = require('./address')(sequelize, Sequelize.DataTypes);
const Promo = require('./promo')(sequelize, Sequelize.DataTypes);
const Review = require('./review')(sequelize, Sequelize.DataTypes);

// Set up associations
User.associate({ Address, Order });
Truck.associate({ Provider, Order });
Provider.associate({ Truck, Order, Address });
Order.associate({ User, Provider, Truck, Review });
Address.associate({ User, Provider });
Review.associate({ Order });

const db = {
  User,
  Truck,
  Provider,
  Order,
  Address,
  Promo,
  Review,
  sequelize,
  Sequelize
};

module.exports = db;
