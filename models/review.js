module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        ID_Ulasan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Rating_Penyedia: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false
        },
        Rating_Truk: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false
        },
        Ulasan: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Review.associate = (models) => {
        Review.belongsTo(models.Order, { foreignKey: 'ID_Pesanan' });
    };

    return Review;
};
