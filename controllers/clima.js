const {response} = require('express');
const axios = require('axios');

const clima = async (req,res) => {
  const lat = req.params.lat;
  const longi = req.params.longi;
  const paramsOpenWeather = {
    'appid':process.env.OPENWEATHER_KEY || '',
    'lat':`${lat}`,
    'lon':`${longi}`,
    'units':'metric',
    'lang':'es'
  }

  try {
    const instance = axios.create({
      baseURL: 'https://api.openweathermap.org/data/2.5/weather',
      params: paramsOpenWeather
    })
    const respuesta = await instance.get();
    const {weather,main,wind,name} = respuesta.data;
    const resultado = {
      desc: weather[0].description,
      min: main.temp_min,
      max: main.temp_max,
      temp: main.temp,
      humedad: main.humidity,
      presion: main.pressure,
      nivelDelMar: main.sea_level,
      viento: wind.speed,
      nombre: name
    };
    return res.status(200).send(resultado)
  } catch (error) {
    console.log(error)
    return error;
  }
}


module.exports = {clima};