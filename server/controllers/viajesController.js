const VIAJES = require('../models/Viajes');

exports.infoViajes = async (req, res)  => {
  let viajes = await VIAJES.findAll();
  res.render('viajes', {
    pagina: 'Próximos Viajes',
    viajes
  });
};

exports.infoViaje = async (req, res)  => {
  let viaje = await VIAJES.findByPk(req.params.id);
  res.render('viaje', {
    viaje
  });
};
