const express = require('express');
const router = express.Router()
var controller = require('../controllers/socio.controller');

router.post('/insertar',controller.insertar);
module.exports = router