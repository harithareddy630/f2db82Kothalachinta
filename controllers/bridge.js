var bridge = require('../models/bridge'); 
 
// List of all bridges 
exports.bridge_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: bridge list'); 
}; 

// List of all bridges 
exports.bridge_list = async function(req, res) { 
    try{ 
        thebridges = await bridge.find(); 
        res.send(thebridges); 
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
 
// List of all bridges 
exports.bridge_detail = async function(req, res) { 
    try{ 
        thebridges = await bridge.find(); 
        res.send(thebridges); 
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

// List of all bridges
exports.bridge_create_post = async function(req, res) { 
    try{ 
        thebridges = await bridge.find(); 
        res.send(thebridges); 
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

// List of all bridges 
exports.bridge_delete = async function(req, res) { 
    try{ 
        thebridges = await bridge.find(); 
        res.send(thebridges); 
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

// List of all bridges 
exports.bridge_update_put = async function(req, res) { 
    try{ 
        thebridges = await bridge.find(); 
        res.send(thebridges); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.bridge_view_all_Page = async function(req, res) { 
    try{ 
        thebridges = await bridge.find(); 
        res.render('bridges', { title: 'bridge Search Results', results: thebridges }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
};   

// Handle bridge create on POST. 
exports.bridge_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new bridge(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"bridge_name":"lalsingh", "bridge_size":100, "bridge_type":"rotational"}  
    document.bridge_name = req.body.bridge_name; 
    document.bridge_size = req.body.bridge_size; 
    document.bridge_type = req.body.bridge_type;   
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){  
        res.status(500); 
        res.send(`{"error": ${err}}`);  
    }   
}; 
 

  