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


app.use(express.static("public"));

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

// app.post("/api/creathunt/", ({ body }, res) => {
//   console.log(body)
//   var newHunt = {
//     targetInfo: {
//       targetName: body,
//       targetId: body,
//       targetLat: body,
//       targetLng: body,
//       targetCategory: body,
//       targetLikes: body,
//       targetAddress: body,
//       targetCrossStreets: body,
//       targetNeighborhood: body
//     },
//     relatedInfo1: {
//         nextName: body,
//         nextId: body,
//         nextLat: body,
//         nextLng: body,
//         nextCategory: body,
//         nextLikes: body,
//         nextAddress: body,
//         nextCrossStreets: body,
//         nextNeighborhood: body
//     },
//     relatedInfo2: {
//       nextName: body,
//       nextId: body,
//       nextLat: body,
//       nextLng: body,
//       nextCategory: body,
//       nextLikes: body,
//       nextAddress: body,
//       nextCrossStreets: body,
//       nextNeighborhood: body
//     },
//     relatedInfo3: {
//       nextName: body,
//       nextId: body,
//       nextLat: body,
//       nextLng: body,
//       nextCategory: body,
//       nextLikes: body,
//       nextAddress: body,
//       nextCrossStreets: body,
//       nextNeighborhood: body
//     },
//     listInfo: {
//         listName: body,
//         listDescription: body,
//         listLength: body,      
//         listFollowers: body,
//         listType: body
//     }
//   }
//   Hunt.create(newHunt)
//     .then(newHunt => {
//       res.json(newHunt);
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(400).json(err);
//     });
// });

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
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
