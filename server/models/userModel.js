const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
        type: 'Date',
        default: Date.now()
    },
    last_logged_in: {
        type:'Date',
        default: Date.now()
    }

})
// generateHash password
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8), 'MY_SECRET')
}
// verify Password
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

// check user is activated
userSchema.statics.findOneUser = function(email) {
    return this.findOne({'email':email,'is_activated':true});
  }


module.exports = mongoose.model('User',userSchema);

