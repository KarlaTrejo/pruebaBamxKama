const express = require('express');
const router = express.Router()
var controller = require('../controllers/socio.controller');

router.put('/actualizar',controller.actualizar);
module.exports = router