const passport = require("koa-passport");
const LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var _ = require("lodash");

var users = [
  {
    id: "1",
    name: "rob"
  },
  {
    id: "2",
    name: "alex"
  },
  {
    id: "3",
    name: "cenk"
  }
];

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter("jwt");
opts.secretOrKey = "secret";

passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    console.log("payload received", jwt_payload);

    // CHECK IF THE USER IN THE JWT IS VALID
    var user = users[_.findIndex(users, { id: jwt_payload.id })];
    console.log(user);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
);
