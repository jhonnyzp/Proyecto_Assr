const mysql = require('mysql2');

module.exports = () => {
    return mysql.createConnection({
        host: '192.168.193.200',
        user:'assr',
        password: 'assr',
        database:'assr',
    });
    }
