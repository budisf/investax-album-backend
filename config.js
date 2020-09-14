const mysql = require('mysql');
var mothods = {};

mothods.conf = function(){
  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'investax'
});
  connection.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 return connection
}

mothods.port = function(){
	const port = 8888
	return port
}

exports.data = mothods;
