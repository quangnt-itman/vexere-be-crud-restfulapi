const dotenv = require( 'dotenv' );

const PE = process.env;
const envPath = __dirname + `/../.env.${ PE.NODE_ENV }`;

dotenv.config( { path: envPath } );

console.log( 'process.env: ', PE.NODE_ENV );

const PORT = PE.PORT;
const MONGO_URI = PE.MONGO_URI;
const JWT_SECRET_KEY = PE.JWT_SECRET_KEY;
const USER = PE.USER;
const PASSWORD = PE.PASSWORD;

module.exports = { PORT, MONGO_URI, JWT_SECRET_KEY, USER, PASSWORD };
