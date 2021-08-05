const {Router} = require('express');
const {buscarCiudades} = require('../controllers/busqueda');


const router = Router();

router.get('/:ciudad', buscarCiudades)


module.exports = router;