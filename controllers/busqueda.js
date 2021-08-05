const {response} = require('express');
const axios = require('axios');

const buscarCiudades = async (req, res)=>{
  const params = {
    'access_token':process.env.MAPBOX_KEY || '',
    'limit': 8,
    'language':'es'};
  const ciudad = req.params.ciudad;
  try {
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ ciudad }.json`,
      params: params
    })
    const respuesta = await instance.get();
    const ver = respuesta.data.features.map(lugar => ({
      id:lugar.id,
      nombre:lugar.place_name_es,
      lat: lugar.center[1],
      longi: lugar.center[0]
    }));
    return res.status(200).send(ver)
  } catch (error) {
      console.log(error)
      console.log('Ciudad no encontrada')
      return [];
  }
}

module.exports = {buscarCiudades}