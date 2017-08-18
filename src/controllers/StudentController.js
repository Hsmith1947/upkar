module.exports = class {
    static async createForm(ctx) {
        await ctx.render("students/create.njk");
    }

    static async create(ctx) {
        // put student in database
    }
}