const banco = require('mysql2');

const conn = banco.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gatedb'
});

module.exports = conn;