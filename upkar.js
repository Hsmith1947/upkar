const Koa = require("koa");
const serve = require("koa-static");
const views = require("koa-views");
const session = require('koa-session');
const nunjucks = require("nunjucks");
const router = require("./src/router");
const app = new Koa();


app.keys = ["d7d6duyo873cycdgchgcfuibyevriq7efcdjksg"];
app.use(session(app));

nunjucks.configure("./src/views");
app.use(views(__dirname + "/src/views", {map: {njk: "nunjucks"},extension: "njk"}));

app.use(serve("public"));
app.use(router.routes());

app.listen(4000, () => {
	console.log("Listening on port 4000...");
});