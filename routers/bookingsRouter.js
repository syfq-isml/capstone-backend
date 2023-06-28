const express = require("express");
const router = express.Router();

class BookingsRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    // Unprotected routes

    // Protected routes
    router.use(this.checkJWT);
    router.get("/user", this.controller.getBookingsOfOneUser);
    return router;
  }
}

module.exports = BookingsRouter;
