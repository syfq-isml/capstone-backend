const express = require("express");
const router = express.Router();

class BandBookingsRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    // Unprotected routes
    router.get("/", this.controller.getAll);

    // Protected routes
    router.use(this.checkJWT);
    router.put("/booking/:bookingId", this.controller.updateBandStatus);
    return router;
  }
}

module.exports = BandBookingsRouter;
