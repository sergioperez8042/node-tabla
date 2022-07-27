const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');



console.clear();


crearArchivo(argv.b, argv.l)
    .then(archivo => console.log(archivo.rainbow,'creado'))
    .catch(err => console.log(err));


