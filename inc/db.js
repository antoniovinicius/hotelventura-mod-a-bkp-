// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'user',
    database: 'hotelventura',
    password: process.env.DB_PASSWORD,
    multipleStatements: true
});

module.exports = connection;