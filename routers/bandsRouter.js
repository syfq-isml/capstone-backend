const express = require("express");
const router = express.Router();

class BandsRouter {
  constructor(controller, checkJWT = null) {
    this.controller = controller;
    this.checkJWT = checkJWT;
  }

  routes() {
    router.get("/", this.controller.getAll);
    router.get("/genres", this.controller.getAllWithGenres);

    router.get("/:bandId", this.controller.getOneWithGenres);
    return router;
  }
}

module.exports = BandsRouter;
