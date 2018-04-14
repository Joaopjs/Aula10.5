var express = require('express');
var router = express.Router();
var controller = require('../controller/Homecontroller');

/* GET users listing. */
router.get('/', controller.users);

module.exports = router;
