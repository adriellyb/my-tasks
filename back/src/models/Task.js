const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Task = sequelize.define('Task', {

    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },

    descrição: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

});

module.exports = Task;