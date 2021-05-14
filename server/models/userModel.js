const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: 'string',
        required: true,
    },
    email :{
        type:'string',
        required: true,
        unique: true,
        maxLength: 255,
    },
    password:{
        type:'string',
        required: true,
        maxLength: 255,
    },
    is_activated:{
        type:Boolean,
        default:false
    },
    created_at:{
        type: 'datetime',
        default: Date.now()
    },
    last_logged_in: {
        type:'datetime',
        default: Date.now()
    }

})