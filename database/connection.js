const banco = require('mysql2')

module.exports = banco.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gatedb'
})