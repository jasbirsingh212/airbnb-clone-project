const mongoose = require('mongoose');
const {Schema, Model} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    }
})

const UserModel  = new Model('User', UserSchema);

module.exports= {
    UserModel
}