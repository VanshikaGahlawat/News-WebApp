const mongoose = require('mongoose');
const uuid = require('uuidv1');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String, 

}, {timestamps: true});


userSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.salt = uuid();
    this.hashed_password = this.encryptPassword(password);
})
.get(function(){
    return this._password;
})



userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText)===this.hashed_password;
    },
    encryptPassword: function(password){
        if(!password){
            return '';
        }
        try {
            return crypto.Hmac('sha1', this.salt)
                            .update(password)
                            .digest('hex')
        } catch (error) {
            return '';
        }
    }
}



module.exports = mongoose.model('User', userSchema);