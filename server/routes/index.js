const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();


// CONTROLADORES
const HOME_CONTROLLER = require('../controllers/homeController');
const NOSOTROS_CONTROLLER = require('../controllers/nosotrosController');
const VIAJES_CONTROLLER = require('../controllers/viajesController');
const TESTIMONIALES_CONTROLLER = require('../controllers/testimonialesController');

module.exports = function() {

  ROUTER.get('/', HOME_CONTROLLER.infoConsultas);
  
  ROUTER.get('/nosotros', NOSOTROS_CONTROLLER.infoNosotros);
  
  ROUTER.get('/viajes', VIAJES_CONTROLLER.infoViajes);
  
  ROUTER.get('/viajes/:id', VIAJES_CONTROLLER.infoViaje);
    
    ROUTER.get('/testimoniales', TESTIMONIALES_CONTROLLER.infoTestimoniales);
    // Cuando se llena el formulario
    ROUTER.post('/testimoniales', TESTIMONIALES_CONTROLLER.infoTestimonial);

    return ROUTER;
};
  