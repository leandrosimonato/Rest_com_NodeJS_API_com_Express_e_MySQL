const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "pet-shop",
  password: "30SimoTony@1988",
  database: "agenda-petshop",
});

module.exports = conexao;