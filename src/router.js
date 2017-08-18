const koaBody = require("koa-body")();
const router = require("koa-router")();
const DefaultController = require("./controllers/DefaultController");
const UserController = require("./controllers/UserController");
const ErrorController = require("./controllers/ErrorController");
const SecurityController = require("./controllers/SecurityController");
const StudentController = require("./controllers/StudentController");

const guard = async (ctx, next) => {
	if (ctx.session.user === null) {
        ctx.redirect("/login");
    }

    await next();
};

router
    .get("/", DefaultController.home)

    .get("/donate", DefaultController.donate)
    .get("/contact", DefaultController.contact)
    .get("/footer", DefaultController.footer)
    .get("/learning", DefaultController.learning)
    .get("/meet-our-team", DefaultController.meetourteam)
    .get("/ourstory", DefaultController.ourstory)
    .get("/teaching", DefaultController.teaching)


    .get("/users", guard, UserController.index)
    .get("/users/:id", guard, UserController.show)

    //.post("/users/create", koaBody, UserController.create)
    .get("/login", SecurityController.loginShow)
    .get("/logout", SecurityController.logout)
    .post("/login", koaBody, SecurityController.loginAttempt)

    .get("/signup", SecurityController.signupShow)
    .post("/signup", koaBody, SecurityController.signupAttempt)

    //Student Management
    .get("/student/create", StudentController.createForm)
    .post("/student/create", koaBody, StudentController.create)

    .get("/:path*", ErrorController.notFound) // KEEP THIS LAST !!!
;

module.exports = router;