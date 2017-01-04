/**
 * Created by Shalom on 04/01/2017.
 */
const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    _id:Number,
    name:String,
    date:Date
});

mongoose.model('User',userSchema);
module.exports =  mongoose.model('User');
