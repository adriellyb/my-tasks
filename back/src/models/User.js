const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");
const Task = require("./Task");

const User = sequelize.define('User', {

    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: {
                msg: "Você deve adicionar um email válido."
            },
        }
        
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: {
                msg: "Você deve adicionar uma senha com letras e números."
            }
        }
    },

});

User.associate = function (models) {
    User.hasMany(models.Task);
}

module.exports = User;