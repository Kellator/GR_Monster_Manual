'use strict';
const { Strategy: LocalStrategy } = require('passport-local');
var config = require('../config');
var passport = require('passport');
// Assigns the Strategy export to the name JwtStrategy using object destructuring
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variable_names
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
// const { User } = require('../mongoose/UserModel');
const User = require('../mongoose/UserModel.js');
const { JWT_SECRET } = require('../config');

// passport authentication strategy
const localStrategy = new LocalStrategy((username, password, done) => {
        console.log("login strategy");
        User.findByUsername(username, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            user.validatePassword(password, (err, isValid) => {
                if(err || !isValid) { return done(null, false, {
                    message: 'Incorrect Password.'
                });
            }
                return done(null, user);
            });
        });
    }
);

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