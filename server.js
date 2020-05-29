const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// const router = require("express").Router();
const Hunt = require("./models/Hunt");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("client/build"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/geohunt", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Define API routes here

app.get("/api/hunts", (req, res) => {
  Hunt.find({})
    .then(hunt => {
      res.json(hunt);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/api/createexpedition/:size", ({ params }, res) => {
  // console.log(params.size)
  Hunt.find({})
    .then(hunt => {
      // Randomize and pick 5 and send
      const huntArray = Object.keys(hunt).map(i => hunt[i])      

      for(var i = huntArray.length -1; i > 0; i--) {
        // Random number generated used to swap hunts
        var j = Math.floor(Math.random() * (i + 1))
        var temp = huntArray[i];
        huntArray[i] = huntArray[j];
        huntArray[j] = temp        
      };

      var Expedition = []

      for (var v = 0; v < params.size; v++) {
        // console.log(v)
      
        Expedition.push(huntArray[v])

      };

      // console.log(huntArray)

      // console.log(Expedition)

      res.json(Expedition);
      
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/creathunt/", ({ body }, res) => {
  console.log(body)
  var newHunt = {
    targetInfo: {
        targetName: name,
        targetId: id,
        targetLat: lat,
        targetLng: lng,
        targetAccuracy: 0.025,
        targetCategory: category,
        targetLikes: likes,
        targetAddress: address,
        targetCrossStreets: crossStreet,
        targetNeighborhood: neighborhood,
        targetFactoid: "Insert Factoid",
        targetPhoto: googlePhotosLinks,
        targetGooglePlacesId: targetGooglePlacesId,
        targetRating: googleRating,
        targetVicinity: googleVicinity,
        targetTypes: googleTypes,
        targetURL: googleURL
    },
    clues: {
        clue1: "Insert Clue 1",
        clue2: "Insert Clue 2",
        clue3: "Insert Clue 3",
        clue4: "Insert Clue 4",
        clue5: "Insert Clue 5",
        clue6: "Insert Clue 6",
        clue7: "Insert Clue 7",
        clue8: "Insert Clue 8",      
        clue9: "Insert Clue 9",
        clue10: "Insert Clue 10"
    }
  }

  Hunt.collection.insertOne(newHunt)
    .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
    })
    .catch(err => {
    console.error(err);
    process.exit(1);
    });

});

app.delete("/api/hunt/:id", (req, res) => {
  Hunt.deleteOne({
    "_id": req.params.id
  }).then(() => res.status(200).json(true))
    .catch(err => {
      res.status(400).json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/createhunt", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/create-hunt.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
