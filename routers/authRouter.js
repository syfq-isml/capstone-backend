const express = require("express");
const router = express.Router();

class AuthRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    // Unprotected routes
    router.post("/login", this.controller.loginUser);
    router.post("/register", this.controller.registerUser);
    router.post("/register/admin", this.controller.registerAdminUser);

    // Protected routes
    router.use(this.checkJWT);
    router.post("/validate", this.controller.validateToken);

    return router;
  }
}

module.exports = AuthRouter;
