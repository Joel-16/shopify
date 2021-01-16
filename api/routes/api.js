var express = require('express');
var router = express.Router();
var cont=require('../controller/cont')

router.post('/add',cont.add)

module.exports = router;
