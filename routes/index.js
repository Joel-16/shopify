var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var sendstatus=(res,status,content)=>{
   res.status(status);
   res.json(content);
}

module.exports = router;
