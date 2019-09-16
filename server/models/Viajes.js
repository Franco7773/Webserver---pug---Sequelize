const SEQUELIZE = require('sequelize');
const DB = require('../config/database');

const VIAJES = DB.define('viajes', {
  titulo: {
    type: SEQUELIZE.STRING
  },
  precio: {
    type: SEQUELIZE.STRING
  },
  fecha_ida: {
    type: SEQUELIZE.DATE
  },
  fecha_vuelta: {
    type: SEQUELIZE.DATE
  },
  imagen: {
    type: SEQUELIZE.STRING
  },
  descripcion: {
    type: SEQUELIZE.STRING
  },
  disponibles: {
    type: SEQUELIZE.STRING
  },
  createdAt: {
    type: SEQUELIZE.DATE
  },
  updatedAt: {
    type: SEQUELIZE.DATE
  }
});

module.exports = VIAJES;
