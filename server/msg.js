/**
 * Created by Shalom on 04/01/2017.
 */
const mongoose = require('mongoose');

var msgSchema = mongoose.Schema({
    _id:Number,
    msg:String,
    user:String,
    date:Date
});

mongoose.model('Message',msgSchema);
module.exports =  mongoose.model('Message');