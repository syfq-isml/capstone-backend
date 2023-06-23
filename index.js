const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// Import db
const db = require("./db/models/index");
const { Availability, Band, BandBookings, BandGenres, Booking, Genre, User } =
  db;

// Enable CORS
app.use(cors());

// Setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
