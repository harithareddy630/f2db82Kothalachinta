var express = require('express');
const bridge_controlers= require('../controllers/bridge'); 

var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('bridge', { title: 'Serach Results Bridge' });
// });
/* GET detail bridge page */
router.get('/detail', bridge_controlers.bridge_view_one_Page);
 
/* GET bridges */ 
router.get('/', bridge_controlers.bridge_view_all_Page ); 
module.exports = router;

/* GET create bridge page */ 
router.get('/create',secured, bridge_controlers.bridge_create_Page); 
/* GET create update page */ 
router.get('/update',secured, bridge_controlers.bridge_update_Page); 
/* GET delete bridge page */ 
router.get('/delete',secured, bridge_controlers.bridge_delete_Page); 
// GET request for one bridge. 
router.get('/bridges/:id', bridge_controlers.bridge_detail); 
module.exports = router;  