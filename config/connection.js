const mysql = require('mysql');

const connection = mysql.createConnection({ //dev
	host: 'd6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'oa2k7unvuyngr9eb',
	password: 't6zhp8lsm0prmnut',
	database: 'q94edj28c7kahhgd'
});

connection.connect((err) => {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log(`connected to aws database as id  + ${connection.threadId}`);
});

module.exports = connection;