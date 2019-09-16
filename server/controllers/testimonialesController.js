const TESTIMONIAL = require('../models/Testimoniales');

exports.infoTestimoniales = async (req, res)  => {
  let testimoniales = await TESTIMONIAL.findAll();
  res.render('testimoniales', {
    pagina: 'Testimoniales',
    testimoniales
  });
};

exports.infoTestimonial = async (req, res) => {
  // Validar que todos los campos estén llenos
  let { nombre, correo, mensaje } = req.body;

  let errs = [];
  if (!nombre) {
    errs.push({ mensaje: 'Agrega tu Nombre' });
  }
  if (!correo) {
    errs.push({ mensaje: 'Agrega tu Correo' });
  }
  if (!mensaje) {
    errs.push({ mensaje: 'Agrega tu Mensaje' });
  }

  // revisar por errores
  if (errs.length > 0) {
    // Muestra la vista con errores
    let testimoniales = await TESTIMONIAL.findAll();
    res.render('testimoniales', {
      errs,
      nombre,
      correo,
      mensaje,
      pagina: 'Testimoniales',
      testimoniales
    });
  } else {
    // Almacenarlo en la DB
    TESTIMONIAL.create({
      nombre,
      correo,
      mensaje
    })
    .then(testimonial => res.redirect('/testimoniales'))
    .catch(err => console.error(err));
  }
};
