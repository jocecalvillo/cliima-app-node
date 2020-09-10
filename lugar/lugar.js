
const axios = require('axios');

const getLugarLatLng = async(dir) => {


    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodedUrl}?json=1`
    });


    const resp= await instance.get();
        
    if(resp.data.latt===0){
        throw new Erro(`No hay resultados para ${dir}`);
    }

    const direccion=resp.data.standard.city;
    const lat=resp.data.latt;
    const lng=resp.data.longt;


        return{
            direccion,
            lat,
            lng
        }

}

module.exports={
    getLugarLatLng
}


