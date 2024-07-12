module.exports = (sequelize, DataTypes) => {
    const Promo = sequelize.define('Promo', {
        ID_Promo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_Promo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Deskripsi_Promo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Diskon: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Tanggal_Mulai: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Tanggal_Berakhir: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Promo;
};
