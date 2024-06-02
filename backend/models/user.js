// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoUsuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    primerNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    segundoNombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    primerApellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    segundoApellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    }

});


module.exports = User;