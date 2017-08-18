const User = require("../models/User");
const DB = require("../services/DB");
const Crypt = require("../services/Crypt");


module.exports = class {
	static async loginShow(ctx) {
		await ctx.render("login.njk");
	}

    static async loginAttempt(ctx) {
        const users = await DB.exec("select * from user where username = ? limit 1", [
            ctx.request.body.username,
        ]);

        const user = users[0];

        if (user === undefined) {
        	ctx.redirect("/login");
        	return;
        }

        if (Crypt.verifyPassword(ctx.request.body.password, user.password) !== true) {
        	ctx.redirect("/login");
        	return;
        }

        delete user.password;

        ctx.session.user = user;

        ctx.redirect("/");
    }

    static async logout(ctx) {
    	ctx.session.user = null;

		ctx.redirect("/");
	}

    static async signupShow(ctx) {
		await ctx.render("signup.njk");
	}

    static async signupAttempt(ctx) {
        const body = ctx.request.body;

        await DB.exec("insert into user (username, email, password) values (?, ?, ?)", [
            body.username,
            body.email,
            Crypt.encodePassword(body.password),
        ]);

        ctx.redirect("/login");
    }
}