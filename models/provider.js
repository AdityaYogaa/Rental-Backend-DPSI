module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('Provider', {
        ID_Penyedia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_Penyedia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Rating_Penyedia: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false
        },
        Informasi_Kontak: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Provider.associate = (models) => {
        Provider.hasMany(models.Truck, { foreignKey: 'ID_Penyedia' });
        Provider.hasMany(models.Order, { foreignKey: 'ID_Penyedia' });
    };

    return Provider;
};
