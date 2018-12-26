const Router = require("koa-router");
const passport = require("koa-passport");
const fs = require("fs");

const router = new Router();

router.get(
  "/auth",
  passport.authenticate("jwt", { session: false }),
  async ctx => {
    ctx.body = "success";
  }
);

router.get("/noauth", async (ctx, next) => {
  ctx.body = "public route successful";
});

module.exports = router;
