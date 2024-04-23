var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

require("dotenv").config();

var indexRouter = require("./routes/index");
var tempidsRouter = require("./utilities/tempid.route");
var moviesRouter = require("./modules/movie/movie.route");
var tempidsRouter = require("./utilities/tempid.route");
var blogRouter = require("./modules/blog/blog.router");
var noteRouter = require("./modules/note/note.route");
var passwordsaversRouter = require("./modules/passwordsaver/passwordsaver.router");
var paymentsRouter = require("./modules/payment/payment.route");
var mobileRouter = require("./modules/mobile/mobile.router");
var gstRouter = require("./modules/gstinvoice/gstinvoice.router");
var hospitalRouter = require("./modules/hospital/hospital.router");
var insuranceRouter = require("./modules/insurance/insurance.router");
var playlistRouter = require("./modules/playlist/playlist.router");
var foodsRouter = require("./modules/food/food.router");
var mailIdsRouter = require("./modules/mailIdsaver/MailIdsaver.router");
var hotelsRouter = require("./modules/hotel/hotel.router");
var sportsRouter = require("./modules/sports/sports.router");
var contackbooksRouter = require("./modules/contackbook/contackbook.router");

const mongoose = require("mongoose");
var cors = require("cors");

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Connected!"))
  .catch((error) => console.log(error.message));

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/tempid", tempidsRouter);
app.use("/blog", blogRouter);
app.use("/contackbook", contackbooksRouter);
app.use("/food", foodsRouter);
app.use("/gst", gstRouter);
app.use("/hospital", hospitalRouter);
app.use("/hotel", hotelsRouter);
app.use("/insurance", insuranceRouter);
app.use("/mailid", mailIdsRouter);
app.use("/mobile", mobileRouter);
app.use("/movie", moviesRouter);
app.use("/note", noteRouter);
app.use("/passwordsaver", passwordsaversRouter);
app.use("/payment", paymentsRouter);
app.use("/playlist", playlistRouter);
app.use("/sports", sportsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
