'use strict';
// strategies from Thinkful JWT curriculum
const { Strategy: LocalStrategy } = require('passport-local');
var config = require('../config');
var passport = require('passport');
// Assigns the Strategy export to the name JwtStrategy using object destructuring
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../mongoose/UserModel.js');
const { JWT_SECRET } = require('../config');

// passport authentication strategy
// const localStrategy = new LocalStrategy((username, password, done) => {
//         User.findByUsername(username, (err, user) => {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {
//                     message: 'Incorrect username.'
//                 });
//             }
//             user.validatePassword(password, (err, isValid) => {
//                 if(err || !isValid) { return done(null, false, {
//                     message: 'Incorrect Password.'
//                 });
//             }
//                 return done(null, user);
//             });
//         });
//     }
// );
const localStrategy = new LocalStrategy((username, password, callback) => {
    let user;
    User.findOne({ username: username })
      .then(_user => {
        user = _user;
        if (!user) {
          // Return a rejected promise so we break out of the chain of .thens.
          // Any errors like this will be handled in the catch block.
          return Promise.reject({
            reason: 'LoginError',
            message: 'Incorrect username or password'
          });
        }
        return user.validatePassword(password);
      })
      .then(isValid => {
        if (!isValid) {
          return Promise.reject({
            reason: 'LoginError',
            message: 'Incorrect username or password'
          });
        }
        return callback(null, user);
      })
      .catch(err => {
        if (err.reason === 'LoginError') {
          return callback(null, false, err);
        }
        return callback(err, false);
      });
  });

const jwtStrategy = new JwtStrategy({
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    algorithms: ['HS256']
    },
    (payload, done) => {
        done(null, payload.user)
    }
);

module.exports = { localStrategy, jwtStrategy };