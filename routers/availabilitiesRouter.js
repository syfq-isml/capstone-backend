const express = require("express");
const router = express.Router();

class AvailabilitiesRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    // Unprotected Routes

    // Protected Routes
    router.use(this.checkJWT);
    router.post("/genre/:genreId", this.controller.getAvailableBands);
    router.get("/band/:bandId", this.controller.getAvailOfOneBand);
    router.post("/band/:bandId", this.controller.addAvailOfOneBand);
    router.delete(
      "/:availId/band/:bandId",
      this.controller.deleteOneAvailOfOneBand
    );
    return router;
  }
}

module.exports = AvailabilitiesRouter;
