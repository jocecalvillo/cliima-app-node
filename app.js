const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Descripcion de la ciudad',
        demand: true

    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
  .then(console.log);


clima.getClima(40.42955, -3.67930)
    .then(console.log)
    .catch(console.log)*/


const getInfo=async (direccion)=>{
    


    try {
        const coords=await lugar.getLugarLatLng(direccion);
        const temp= await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`

    } catch (error) {
        return `No se puede determinar el clima de ${direccion}`
    }
    

}


getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log);



//console.log(argv.direccion);

/*const encodedUrl=encodeURI(argv.direccion);
console.log(encodedUrl);

const instance=axios.create({
    baseURL:`https://geocode.xyz/${encodedUrl}?json=1`
});

instance.get()
    .then(resp => {
        console.log(resp.data.longt);
    })
    .catch(err => {
        console.log('Error', err);
    })*/