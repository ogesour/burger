// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ogesour",
  database: "burgers_db"
});

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: 'umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'k0y1c3l12a094k9o',
        password: 'oihtqk44rqarhg9w',
        database: '	ezv11pjqao24jhcn'
    });
};

connection.connect(function(err){
    if(err) {
        console.error("error connecting: " + err.stack)
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection;