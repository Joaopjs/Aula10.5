var express = require('express');
var router = express.Router();
var controller = require('../controller/Homecontroller');

/* GET home page. */
router.get('/', controller.cadastro);

module.exports = router;