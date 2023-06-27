const express = require("express");
const router = express.Router();

class BookingsRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    // Unprotected routes
    router.get("/all", this.controller.getAll);
    // Protected routes
    router.use(this.checkJWT);
    router.get("/user/:userId", this.controller.getBookingsOfOneUser);
    return router;
  }
}

module.exports = BookingsRouter;
