const axios = require('axios');


const getClima=async(lat,lng)=>{
    const resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=38926d2f80abab260658e4e643e50575&units=metric`)

    return resp.data.main.temp;

}


module.exports={
    getClima
}