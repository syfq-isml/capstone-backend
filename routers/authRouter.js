const express = require("express");
const router = express.Router();

class AuthRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    router.post("/login", this.controller.loginUser);
    router.post("/register", this.controller.registerUser);
    router.post("/register/admin", this.controller.registerAdminUser);
    return router;
  }
}

module.exports = AuthRouter;
