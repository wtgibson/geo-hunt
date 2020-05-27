const mongoose = require("mongoose");
const Expedition = require("../models/Expedition.js");
const Hunt = require("../models/Hunt.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/geohunt");

const expeditionSeed = {
  hunts: ["hunt1"],
}

const huntSeed = {
    targetInfo: {
        targetName: "Painted Ladies",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.77611954",
        targetLng: "-122.4333892",
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square"
    },
    nextInfo: {
        nextName: "Alamo Square",
        nextId: "",
        nextLat: "37.77604494",
        nextLng: "-122.4343627",
        nextCategory: "Parks",
        nextLikes: "",
        nextAddress: "Steiner St San Francisco, CA 94117 United States",
        nextCrossStreets: "btwn Fulton & Hayes St",
        nextNeighborhood: ""
    },
    listInfo: {
        listName: "San Francisco Adventure Spots",
        listDescription: "A mix of well known and secret San Francisco spots.",
        listLength: "63",      
        listFollowers: "40",
        listType: "Others"
    }
  }

Expedition.remove({})
.then(() => Expedition.collection.insertOne(expeditionSeed))
.then(data => {
console.log(data.result.n + " records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});

Hunt.remove({})
.then(() => Hunt.collection.insertOne(huntSeed))
.then(data => {
console.log(data.result.n + " records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});