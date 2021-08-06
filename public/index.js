
new Vue({
  el: '#app',
  data: {
    respuesta:'',
    ciudad: '',
    listaCiudades : [],
    latitudCiudad : '',
    longitudCiudad: '',
    nombreCiudad : '',
    mostrarTabla: false,
    climaDesc : []
  },
  methods: {
    cargarCiudades: function (){
      this.mostrarTabla = false;
      var self = this;
      let ciudad = this.ciudad;
      axios.get('https://clima-fabio.herokuapp.com/api/buscar/'+ciudad)
      .then(
        function (response){
          self.listaCiudades = response.data;
        }
      )
    },
    imprimeCiudad: function(latitud,longitud){
      var self = this;
      axios.get('https://clima-fabio.herokuapp.com/api/clima/'+latitud+'/'+longitud)
      .then(
        function(response){
          self.climaDesc.pop();
          self.climaDesc.push(response.data);
          self.mostrarTabla = true;
        }
      )
    } 
  }
})
