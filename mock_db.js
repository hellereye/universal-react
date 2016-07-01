var casual = require('casual');

module.exports = function() {


	var data = {
			users: []
		}
		// Create 1000 users
	for (var i = 0; i < 10; i++) {
		data.users.push({
			id: i,
			name: casual.last_name,
			username: casual.full_name,
			email: casual.email,
			phone: casual.phone,
			website: casual.company_name

		})
	}
	return data
}