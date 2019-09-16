const VIAJES = require('../models/Viajes');
const TESTIMONIAL = require('../models/Testimoniales');

exports.infoConsultas = async (req, res)  => {

  let viajes = await VIAJES.findAll({ limit: 3 });

  let testimoniales = await TESTIMONIAL.findAll({ limit: 3 });

  res.render('index', {
    pagina: 'Próximos Viajes',
    clase: 'home',
    viajes,
    testimoniales
  });
};
