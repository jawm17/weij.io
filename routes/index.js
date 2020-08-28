const path = require("path");
const router = require("express").Router();
const userRouter = require("./User.js");
const imageRouter = require("./image-upload");
const mediaRouter = require("./Media.js");

// API Routes
router.use("/User", userRouter);
router.use("/api", imageRouter);
router.use("/media", mediaRouter);

// If no API routes are hit, send the React app
router.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/src/index.html"));
});

module.exports = router;