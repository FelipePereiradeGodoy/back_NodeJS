import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: 'Cliente'
});

conexao.connect(function (err) {
    if (err)
        throw err;
    else
        console.log("Connected!");
});

module.exports = conexao;