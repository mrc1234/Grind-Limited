const connection = require('../config/connection.js');

const orm = {
	login: (obj, retrn) => {
		console.log('in orm')
		console.log(obj)
		let queryString = `SELECT * FROM users WHERE ( userEmail = '${obj.userEmail}' AND  userPassword = '${obj.userPassword}' ) `;
		connection.query(queryString, (err, result) => {
			if (err) throw err;
			retrn(result);
		});
	},
};
module.exports = orm;