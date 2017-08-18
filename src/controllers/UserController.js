const User = require("../models/User");
const DB = require("../services/DB");
const Crypt = require("../services/Crypt");


module.exports = class {
    static async index(ctx) {
        if (ctx.session.user === null) {
            ctx.body = "forbidden";
            return;
        }

        const users = await DB.exec("select * from user");

        ctx.body = JSON.stringify(users);
    }

    static async show(ctx) {
        const users = await DB.exec("select * from user where id = ?", [
            ctx.params.id,
        ]);

        ctx.body = JSON.stringify(users[0]);
    }
}