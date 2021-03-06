const { sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    const categoria = sequelize.define('Categorias', {
        genero: dataTypes.STRING
    }, {
        timestamps: false
    })
    categoria.associate = (models => {
        categoria.hasMany(models.Productos, {
            as: "productos",
            foreignKey: "categoria_id"
        });
    })
    return categoria;
}