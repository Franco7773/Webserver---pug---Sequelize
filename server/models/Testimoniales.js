const SEQUELIZE = require('sequelize');
const DB = require('../config/database');

const TESTIMONIAL = DB.define('testimoniales', {
  nombre: {
    type: SEQUELIZE.STRING
  },
  correo: {
    type: SEQUELIZE.STRING
  },
  mensaje: {
    type: SEQUELIZE.STRING
  },
  createdAt: {
    type: SEQUELIZE.DATE
  },
  updatedAt: {
    type: SEQUELIZE.DATE
  }
});

module.exports = TESTIMONIAL;
