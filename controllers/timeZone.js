const {response} = require('express');
const axios = require('axios');

const timeZone = async (req,res) => {
  const lat = req.params.lat;
  const longi = req.params.longi;
  const paramsBingMaps = {
    'key' : process.env.BINGMAPS_KEY || '',
    'query' : `${lat}`+','+`${longi}`
  };

  try {
    const instance = axios.create({
      baseURL: 'https://dev.virtualearth.net/REST/v1/TimeZone/',
      params : paramsBingMaps
    });
    const respuesta = await instance.get();
    const respuestaAEnviar = respuesta.data.resourceSets[0].resources[0].timeZoneAtLocation[0].timeZone[0].convertedTime;
    return res.status(200).json(respuestaAEnviar)
  } catch (error) {
    console.log(error)
    return res.status(200).json([{'localtime':'No definido'}]);
  }
}

module.exports = {timeZone}