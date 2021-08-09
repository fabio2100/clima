const express = require('express')
const cors = require('cors');


class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT;

    //especificación de la ruta public
    this.app.use(express.static('public'));
    this.buscar = '/api/buscar'
    this.app.use(this.buscar,require('../routes/busqueda'));
    this.clima = '/api/clima';
    this.app.use(this.clima,require('../routes/clima'));
    this.timeZone = '/api/timezone';
    this.app.use(this.timeZone,require('../routes/timeZone'))
  };

  listen(){
    this.app.listen(this.port,()=>{
      console.log("servidor corriendo en " + this.port);
    })
  }

  
}


module.exports = Server;