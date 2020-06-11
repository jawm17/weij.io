const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3500;
const cookieParser = require("cookie-parser");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Add routes, both API and view
app.use(router);

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/MyMoLocalDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
