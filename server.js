require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
// on database error
db.on("error", error => console.error(error));
// when we open the database, do this only once
db.once("open", () => console.log("connected to the database..."));

// to allow our server to use json
app.use(express.json());

const subscriberRouter = require("./routes/subscribers");
app.use("/subscribers", subscriberRouter);

app.listen(3000, () => console.log("server started..."));
