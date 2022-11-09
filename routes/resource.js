var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var bridge_controller = require('../controllers/bridge'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a bridge.  
router.post('/bridges', bridge_controller.bridge_create_post); 
 
// DELETE request to delete bridge. 
router.delete('/bridges/:id', bridge_controller.bridge_delete); 
 
// PUT request to update bridge. 
router.put('/bridges/:id', bridge_controller.bridge_update_put); 
 
// GET request for one bridge. 
router.get('/bridges/:id', bridge_controller.bridge_detail); 
 
// GET request for list of all bridge items. 
router.get('/bridges', bridge_controller.bridge_list);  
 
module.exports = router;    