const {Router} = require('express');
const {clima} = require('../controllers/clima');


const router = Router();

router.get('/:lat/:longi', clima)


module.exports = router;
