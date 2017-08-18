const Crypt = require("../services/Crypt");


module.exports = class {
    static async home(ctx) {
        await ctx.render("home.njk", {user: ctx.session.user});
    }

    static async donate(ctx) {
        await ctx.render("layouts/donate.njk");
    }

     static async contact(ctx) {
        await ctx.render("layouts/contact.njk");
    }

     static async footer(ctx) {
        await ctx.render("layouts/footer.njk");
    }

     static async meetourteam(ctx) {
        await ctx.render("layouts/meet-our-team.njk");
    }

     static async learning(ctx) {
        await ctx.render("layouts/learning.njk");
    }

     static async teaching(ctx) {
        await ctx.render("layouts/teaching.njk");
    }

     static async ourstory(ctx) {
        await ctx.render("layouts/ourstory.njk");
    }

    static json(ctx) {
        const plaintext = "asdf";
        const hash = Crypt.encodePassword(plaintext);
        const verified = Crypt.verifyPassword(plaintext, hash);

        ctx.body = JSON.stringify({plaintext, hash, verified});
    }
}