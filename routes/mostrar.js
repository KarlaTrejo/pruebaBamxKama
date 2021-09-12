const express = require('express');
const router = express.Router()
var controller = require('../controllers/socio.controller');

router.get('/mostrar',controller.mostrar);
module.exports = router