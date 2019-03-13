const mysql = require('mysql');

const connection = mysql.createConnection({ //dev
	host: 'k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'm8ph8wf4ij1ajgn5',
	password: 'l1qo9ygu5o4h1pxv',
	database: 'b0mvfcjwnk5s0r80'
});

connection.connect((err) => {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log(`connected to aws database as id  + ${connection.threadId}`);
});

module.exports = connection;