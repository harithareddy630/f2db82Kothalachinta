var express = require('express');
const bridge_controlers= require('../controllers/bridge'); 

var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bridge', { title: 'Serach Results Bridge' });
// });

module.exports = router;

 
 
/* GET bridges */ 
router.get('/', bridge_controlers.bridge_view_all_Page );   

 