var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bridge', { title: 'Serach Results Bridge' });
});

module.exports = router;
 