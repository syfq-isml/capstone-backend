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
    router.get("/", this.controller.getAllBookings);
    router.get("/user/:userId", this.controller.getBookingsOfOneUser);
    router.post("/user/:userId/genre/:genreId", this.controller.makeABooking);
    router.get("/:bookingId", this.controller.getOneBooking);
    return router;
  }
}

module.exports = BookingsRouter;
