module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        ID_Alamat: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Alamat_Lengkap: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Kota: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Kode_Pos: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Address.associate = (models) => {
        Address.belongsTo(models.User, { foreignKey: 'ID_Pengguna' });
        Address.belongsTo(models.Provider, { foreignKey: 'ID_Penyedia' });
    };

    return Address;
};
