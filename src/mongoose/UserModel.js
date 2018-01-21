var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    }
});
UserSchema.plugin(timestamps);
UserSchema.statics.findByUsername = function(username, callback) {
    return this.findOne({username: username}, function(err, user) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, user);
    });
};
UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
  };
  
  UserSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
  };
var User = mongoose.model('User', UserSchema);
module.exports = User;