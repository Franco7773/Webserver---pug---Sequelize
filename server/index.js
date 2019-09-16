// Importar Express
const EXPRESS = require('express');
const PATH = require('path');
const BODYPARSER = require('body-parser');
const ROUTER = require('./routes');

const CONFIGS = require('./config');

// DB.authenticate()
//   .then(() => console.log('DB Conectada'))
//   .catch(err => console.error(err));

// Configurar Express
const APP = EXPRESS();

// Habilitar PUG
APP.set('view engine', 'pug');
// Añadir las vistas
APP.set('views', PATH.join(__dirname, './views'));

// Cargar una carpeta estatica llamada public
APP.use(EXPRESS.static('public'));

// Validar si estamos en Desarrollo o Producción
let config = CONFIGS[APP.get('env')];

// Creamos la variable para el sitio web
APP.locals.titulo = config.nombreSite;

// Muestra el año actual y genera la ruta
APP.use((req, res, next) => {
  // Crear nueva Fecha
  const FECHA = new Date();
  res.locals.fechaActual = FECHA.getFullYear();
  res.locals.ruta = req.path;
  return next();
});
// Ejecutar BODYPARSER
APP.use(BODYPARSER.urlencoded({ extended: true }));

// cARGAR LAS rUTAS
APP.use('/', ROUTER());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3777;

APP.listen( port, host, () => {
  console.log('El Servidor está funcionando');
});
