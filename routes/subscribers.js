const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// Routes for various things
// Getting all
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
