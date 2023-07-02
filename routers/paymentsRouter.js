const express = require("express");
const router = express.Router();

class PaymentsRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    router.post("/booking/:bookingId", this.controller.createSession);

    // router.use(express.raw({ type: "application/json" }));
    router.post("/webhook", this.controller.setupWebhook);
    return router;
  }
}

module.exports = PaymentsRouter;
