var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h1>REST API</h1> <p>ADITYA YOGA KURNIAWAN <p><p>NIM - 2100016069</p>');
});

module.exports = router;
