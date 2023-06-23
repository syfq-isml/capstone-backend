const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

//Import routers
const BandsRouter = require("./routers/bandsRouter");

// Import controllers
const BandsController = require("./controllers/bandsController");

// Import db
const db = require("./db/models/index");
const { Availability, Band, BandBookings, BandGenres, Booking, Genre, User } =
  db;

// Initialise controllers
const bandsController = new BandsController(Band);

// Initialise routers
const bandsRouter = new BandsRouter(bandsController).routes();

// Enable CORS
app.use(cors());

// Setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialise routes
app.use("/bands", bandsRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
