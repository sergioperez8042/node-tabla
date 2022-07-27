const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOptions: true,
    })
     .option('l', {
        alias: 'listar',
        type: 'boolean',
         demandOptions: true,
        default:false
        
    })
    .check((argv, options)=> {
        if (isNaN(argv.b)) {
            throw new Error('La base tiene que ser un número');
        
        }
        return true;
    })
    .argv;

module.export = argv;