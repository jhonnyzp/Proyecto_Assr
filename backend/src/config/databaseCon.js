const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: '192.168.193.200',
        user:'root',
        password: 'root',
        database:'assr_proy',
    });
    }