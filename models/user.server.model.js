var mongoose = require('mongoose');
var Schema = mongoose.Schema;
console.log(mongoose)

var UserSchema=new Schema({
    uid:Number,
    username:String,
    createTime:Date,
    lastLogin:Date
});
module.exports = UserSchema;