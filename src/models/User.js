const DB = require("../services/DB");


module.exports = class {
	static async index() {
		const users = await DB.exec("select * from user");

		return users;
	}

	static async find(id) {
		const users = await DB.exec("select * from user where id = ? limit 1", [id]);

		return users[0];
	}

	validate() {
		let violations = [];

		if (this.username.length < 6) {
			violations.push("Username must be at least 6 characters");
		}

		if (this.email.includes("@") !== true) {
			violations.push("Email must contain '@'");
		}

		return violations;
	}
}