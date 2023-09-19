const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const form = new Schema({
    name:{ 
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        // match: /.+\@.+\..+/,
        // unique: true
    },
    phoneno:{
        type: Number,
        required: true
    },
    companyname:{
  type:String
    },
    message:{
        type:String,
        required:true
    }
,
timestamp:{
    type:String,
    default:Date.now()
}
});
const details=mongoose.model("customer_details",form);

module.exports=details;