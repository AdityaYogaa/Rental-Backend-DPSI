module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        ID_Pengguna: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nama_Pengguna: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Alamat_Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Nomor_Telepon: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Metode_Pembayaran: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Address, { foreignKey: 'ID_Pengguna' });
        User.hasMany(models.Order, { foreignKey: 'ID_Pengguna' });
    };

    return User;
};
