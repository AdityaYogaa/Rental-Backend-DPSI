module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        ID_Pesanan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Lokasi_Penjemputan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Lokasi_Pengantaran: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Tanggal_Pengiriman: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Status_Pesanan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Biaya_Sewa: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Tanggal_Pembayaran: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    Order.associate = (models) => {
        Order.belongsTo(models.User, { foreignKey: 'ID_Pengguna' });
        Order.belongsTo(models.Provider, { foreignKey: 'ID_Penyedia' });
        Order.belongsTo(models.Truck, { foreignKey: 'ID_Truk' });
        Order.hasMany(models.Review, { foreignKey: 'ID_Pesanan' });
    };

    return Order;
};
