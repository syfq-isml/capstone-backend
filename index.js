const cors = require("cors");
const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

//Import routers
const AuthRouter = require("./routers/authRouter");
const BandsRouter = require("./routers/bandsRouter");
const GenresRouter = require("./routers/genresRouter");
const UsersRouter = require("./routers/usersRouter");
const AvailabilitiesRouter = require("./routers/availabilitiesRouter");

// Import controllers
const AuthController = require("./controllers/authController");
const BandsController = require("./controllers/bandsController");
const GenresController = require("./controllers/genresController");
const UsersController = require("./controllers/usersController");
const AvailabilitiesController = require("./controllers/availabilitiesController");

// Import db
const db = require("./db/models/index");
const { availability, band, bandBooking, bandGenre, booking, genre, user } = db;

// Initialise controllers
const authController = new AuthController(user);
const bandsController = new BandsController(band, db);
const genresController = new GenresController(genre);
const usersController = new UsersController(user);
const availabilitiesController = new AvailabilitiesController(availability);

// Initialise routers
const authRouter = new AuthRouter(authController).routes();
const bandsRouter = new BandsRouter(bandsController).routes();
const genresRouter = new GenresRouter(genresController).routes();
const usersRouter = new UsersRouter(usersController).routes();
const availabilitiesRouter = new AvailabilitiesRouter(
  availabilitiesController
).routes();

// Enable CORS
app.use(cors());

// Setup middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialise routes
app.use("/auth", authRouter);
app.use("/bands", bandsRouter);
app.use("/genres", genresRouter);
app.use("/users", usersRouter);
app.use("/avail", availabilitiesRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
