exports.DATABASE_URL = process.env.DATABASE_URL ||
                    global.DATABASE_URL ||
                    'mongodb://localhost/dk_db';
exports.PORT = process.env.PORT || 5252;
exports.SESSION_KEY = process.env.SESSION_KEY;
exports.JWT_SECRET = process.env.JWT_SECRET || '$2a$10$TUf.FlWMfAfCRkwApcaRNe/ZksU5FMJg51/jFvZDML9pWmiuCfLay';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
exports.API_URL = 'https://hidden-hamlet-10698.herokuapp.com/';
