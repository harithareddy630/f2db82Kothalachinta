var bridge = require('../models/bridge'); 
 
// List of all bridgess 
exports.bridge_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: bridge list'); 
}; 

// List of all bridgess 
exports.bridge_list = async function(req, res) { 
    try{ 
        thebridgess = await bridge.find(); 
        res.send(thebridgess); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


 
// for a specific bridge. 
exports.bridge_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: bridge detail: ' + req.params.id); 
}; 
 
// List of all bridgess 
exports.bridge_list = async function(req, res) { 
    try{ 
        thebridgess = await bridge.find(); 
        res.send(thebridgess); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle bridge create on POST. 
exports.bridge_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: bridge create POST'); 
}; 

// List of all bridgess 
exports.bridge_list = async function(req, res) { 
    try{ 
        thebridgess = await bridge.find(); 
        res.send(thebridgess); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


// Handle bridge delete form on DELETE. 
exports.bridge_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: bridge delete DELETE ' + req.params.id);  
}; 

// List of all bridgess 
exports.bridge_list = async function(req, res) { 
    try{ 
        thebridgess = await bridge.find(); 
        res.send(thebridgess); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


 
// Handle bridge update form on PUT. 
exports.bridge_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: bridge update PUT' + req.params.id);    
};  

// List of all bridgess 
exports.bridge_list = async function(req, res) { 
    try{ 
        thebridgess = await bridge.find(); 
        res.send(thebridgess); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

