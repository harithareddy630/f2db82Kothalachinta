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
 
// // for a specific bridge. 
exports.bridge_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Amoazon detail: ' + req.params.id); 
}; 
// for a specific bridge. 
exports.bridge_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await bridge.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// List of all bridges 
// exports.bridge_detail = async function(req, res) { 
//     try{ 
//         thebridges = await bridge.find(); 
//         res.send(thebridges); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 
 

 


// Handle bridge delete form on DELETE. 
exports.bridge_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: bridge delete DELETE ' + req.params.id); 
}; 
// Handle bridge delete on DELETE. 
exports.bridge_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await bridge.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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
 

// Handle bridge delete on DELETE. 
exports.bridge_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await bridge.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 



// Handle bridge update form on PUT. 
// exports.bridge_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: bridge update PUT' + req.params.id); 
// }; 

// List of all bridges 
// exports.bridge_update_put = async function(req, res) { 
//     try{ 
//         thebridges = await bridge.find(); 
//         res.send(thebridges); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle bridge update form on PUT. 
exports.bridge_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await bridge.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.bridge_type) toUpdate.bridge_type = req.body.bridge_type; 
        if(req.body.bridge_name) toUpdate.bridge_name = req.body.bridge_name; 
        if(req.body.bridge_size) toUpdate.bridge_size = req.body.bridge_size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
//Handle building the view for updating a bridge. 
// query provides the id 
exports.bridge_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await bridge.findById(req.query.id) 
        console.log(result);
        res.render('bridgeupdate', { title: 'bridge Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.bridge_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await bridge.findById(req.query.id) 
        res.render('bridgedelete', { title: 'bridge Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500)  
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a bridge. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.bridge_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('bridgecreate', { title: 'bridge Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.bridge_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await bridge.findById( req.query.id) 
        res.render('bridgedetail',  
{ title: 'bridge Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
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

    document.bridge_type = req.body.bridge_type; 
    document.bridge_name = req.body.bridge_name; 
    document.bridge_size = req.body.bridge_size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 