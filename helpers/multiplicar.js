const fs = require('fs');
const colors = require('colors');
 const crearArchivo = async (base = 5,listar = false) => {
     try {
         
    let salida = '';
    for (let i = 1; i <= 10; i++) {
    salida += (`${base}x${i} = ${base * i}\n`);
    }
         if (listar) {
        console.log('================='.green);
        console.log('Tabla del:', colors.blue(base));
        console.log('=================').green; 
        console.log(salida);

        }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); 
    
        return(`tabla-${base}.txt creado`);


    } catch (error) {
        throw error;
        
    }
    }
module.exports = {
    crearArchivo
}

