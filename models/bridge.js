const mongoose = require("mongoose") 
const bridgeSchema = mongoose.Schema({ 
 bridge_type: String,     
 bridge_name: String, 
 bridge_size: Number  
}) 
 
module.exports = mongoose.model("bridge", 
bridgeSchema)  

