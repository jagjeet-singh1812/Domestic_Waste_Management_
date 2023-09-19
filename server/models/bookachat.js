const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const list = new Schema({
    name:{ 
        type:String,
        required:true
    },
    service:{
        type:String,
    },
    email:{
        type: String,
        required: true,
        // match: /.+\@.+\..+/,
        // unique: true
    }
,
timestamp:{
    type:String,
    default:Date.now()
}
});
const details=mongoose.model("customer_detail_chat",list);

module.exports=details;