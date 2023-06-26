const express = require("express");
const router = express.Router();

class GenresRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    router.get("/", this.controller.getAll);
    return router;
  }
}

module.exports = GenresRouter;
