const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const router = require("express").Router();
const Expedition = require("../models/Expedition.js");
const Hunt = require("../models/Hunt.js");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/geohunt", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// app.use(require("./routes/api-routes.js"));

// Define API routes here

router.get("/api/hunts", (req, res) => {
  Hunt.find({})
    .sort({ date: -1 })
    .then(hunt => {
      res.json(hunt);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/createexpedition/:size", ({ body }, res) => {
  console.log(body)
  var newExpedition = {
    hunts: body
  }
  Expedition.create(newExpedition)
    .then(newExpedition => {
      res.json(newExpedition);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

router.post("/api/creathunt/", ({ body }, res) => {
  console.log(body)
  var newHunt = {
    targetInfo: {
      targetName: body,
      targetId: body,
      targetLat: body,
      targetLng: body,
      targetCategory: body,
      targetLikes: body,
      targetAddress: body,
      targetCrossStreets: body,
      targetNeighborhood: body
  },
  nextInfo: {
      nextName: body,
      nextId: body,
      nextLat: body,
      nextLng: body,
      nextCategory: body,
      nextLikes: body,
      nextAddress: body,
      nextCrossStreets: body,
      nextNeighborhood: body
  },
  listInfo: {
      listName: body,
      listDescription: body,
      listLength: body,      
      listFollowers: body,
      listType: body
  }
  }
  Hunt.create(newHunt)
    .then(newHunt => {
      res.json(newHunt);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
