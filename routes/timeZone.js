const {Router} = require('express');
const {timeZone} = require('../controllers/timeZone');

const router = Router();
router.get('/:lat/:longi',timeZone);

module.exports = router;
