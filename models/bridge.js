const mongoose = require("mongoose")
const bridgeSchema = mongoose.Schema({
    bridge_name: {
        type:String,
        required:true
    },
    bridge_type: {
        type:String,  
        required:true
    },
    bridge_size: {
        type:Number,  
        min:1,
        max:1000   
    }
})
module.exports = mongoose.model("bridge",
    bridgeSchema)   