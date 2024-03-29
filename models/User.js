const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const UserSchema = new Schema({ 
    name: { 
        type: String, 
        required: true 
    }, 
    avatar: String, 
    email: { 
        type: String, 
        required: true 
    }, 
    password: { 
        type: String, 
        required: true 
    }, 
    role: { 
        type: String, 
        default: 'user' 
    } 
}, { timestamps: true }) 

const User = mongoose.model('User', UserSchema) 

module.exports = User 
