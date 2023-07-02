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
const BookingsRouter = require("./routers/bookingsRouter");
const BandBookingsRouter = require("./routers/bandBookingsRouter");
const PaymentsRouter = require("./routers/paymentsRouter");

// Import controllers
const AuthController = require("./controllers/authController");
const BandsController = require("./controllers/bandsController");
const GenresController = require("./controllers/genresController");
const UsersController = require("./controllers/usersController");
const AvailabilitiesController = require("./controllers/availabilitiesController");
const BookingsController = require("./controllers/bookingsController");
const BandBookingsController = require("./controllers/bandBookingsController");
const PaymentsController = require("./controllers/paymentsController");

// Import db
const db = require("./db/models/index");
const checkJWT = require("./middlewares/checkJWT");
const { availability, band, bandBooking, bandGenre, booking, genre, user } = db;

// Initialise controllers
const authController = new AuthController(user);
const bandsController = new BandsController(band, db);
const genresController = new GenresController(genre);
const usersController = new UsersController(user);
const availabilitiesController = new AvailabilitiesController(availability, db);
const bookingsController = new BookingsController(booking, db);
const bandBookingsController = new BandBookingsController(bandBooking, db);
const paymentsController = new PaymentsController(band, db);

// Initialise routers
const authRouter = new AuthRouter(authController, checkJWT).routes();
const bandsRouter = new BandsRouter(bandsController).routes();
const genresRouter = new GenresRouter(genresController).routes();
const usersRouter = new UsersRouter(usersController).routes();
const availabilitiesRouter = new AvailabilitiesRouter(
  availabilitiesController,
  checkJWT
).routes();
const bookingsRouter = new BookingsRouter(
  bookingsController,
  checkJWT
).routes();
const bandBookingsRouter = new BandBookingsRouter(
  bandBookingsController,
  checkJWT
).routes();
const paymentsRouter = new PaymentsRouter(
  paymentsController,
  checkJWT
).routes();

// Enable CORS
app.use(cors());

// Setup middleware
app.use("/payments/webhook", express.raw({ type: "*/*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialise root routes
app.use("/auth", authRouter);
app.use("/bands", bandsRouter);
app.use("/genres", genresRouter);
app.use("/users", usersRouter);
app.use("/avail", availabilitiesRouter);
app.use("/bookings", bookingsRouter);
app.use("/bandbookings", bandBookingsRouter);
app.use("/payments", paymentsRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
