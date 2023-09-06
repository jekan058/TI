const mongoose = require("mongoose");
const {Schema} = mongoose;
const {model} = require("mongoose");
const user = new Schema({
    name: String,
    email: String, 
    password: String,
})

const User = model('users', user);  
module.exports = User;