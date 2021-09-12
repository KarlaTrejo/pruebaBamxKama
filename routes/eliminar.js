const express = require('express');
const router = express.Router()
var controller = require('../controllers/socio.controller');

router.delete('/eliminar',controller.eliminar);
module.exports = router