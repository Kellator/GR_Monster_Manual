exports.DATABASE_URL = process.env.DATABASE_URL ||
                    global.DATABASE_URL ||
                    'mongodb://localhost/dk_db';
exports.PORT = process.env.PORT || 5252;
exports.SESSION_KEY = {secret: 'Sw33tMcG33!',
                        resave: false,
                        saveUninitialized: true,
                        cookie: {secure: true}};