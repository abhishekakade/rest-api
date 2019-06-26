const express = require("express");
const router = express.Router();

// Routes for various things
// Getting all
router.get("/", (req, res) => {
  res.send("Hello world!");
});

// Getting one so we will have to use some id
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Creating one
router.post("/", (req, res) => {});

// Updating one and we will use patch instead of update
// patch updates only the specified information that gets passed in
// by the user while update updates all of the information
router.patch("/:id", (req, res) => {});

// Deleting one
router.patch("/:id", (req, res) => {});

module.exports = router;
