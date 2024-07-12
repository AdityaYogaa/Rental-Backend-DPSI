module.exports = (sequelize, DataTypes) => {
    const Truck = sequelize.define('Truck', {
        ID_Truk: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Jenis_Truk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Kapasitas_Truk: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Kondisi_Truk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Foto_Truk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Lokasi_Truk_Saat_Ini: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Truck.associate = (models) => {
        Truck.belongsTo(models.Provider, { foreignKey: 'ID_Penyedia' });
        Truck.hasMany(models.Order, { foreignKey: 'ID_Truk' });
    };

    return Truck;
};
