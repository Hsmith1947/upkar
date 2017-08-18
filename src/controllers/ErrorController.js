module.exports = class {
	static async notFound(ctx) {
		ctx.body = `Get /${ctx.params.path} not found sir`;
		// ctx.body = await ctx.render("not-found");
	}
};