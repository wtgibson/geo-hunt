const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const huntSchema = new Schema({
  targetInfo: {
    targetName: {
      type: String,
      trim: true,
      required: "Target name required"
    },
    targetId: {
      type: String,
      trim: true,
      required: "Target ID required"
    },
    targetLat: {
      type: String,
      trim: true,
      required: "Target Lat required"
    },
    targetLng: {
      type: String,
      trim: true,
      required: "Target Lng required"
    },
    targetCategory: {
      type: String,
      trim: true,
    },
    targetLikes: {
      type: String,
      trim: true,
    },
    targetAddress: {
      type: String,
      trim: true,
    },
    targetCrossStreets: {
      type: String,
      trim: true,
    },
    targetNeighborhood: {
      type: String,
      trim: true,
    }
  },
  nextInfo: {
    nextName: {
      type: String,
      trim: true,
    },
    nextId: {
      type: String,
      trim: true,
    },
    nextLat: {
      type: String,
      trim: true,
    },
    nextLng: {
      type: String,
      trim: true,
    },
    nextCategory: {
      type: String,
      trim: true,
    },
    nextLikes: {
      type: String,
      trim: true,
    },
    nextAddress: {
      type: String,
      trim: true,
    },
    nextCrossStreets: {
      type: String,
      trim: true,
    },
    nextNeighborhood: {
      type: String,
      trim: true,
    },
  },
  listInfo: {
    listName: {
      type: String,
      trim: true,
    },
    listDescription: {
      type: String,
      trim: true,
    },
    listLength: {
      type: String,
      trim: true,
    },      
    listFollowers: {
      type: String,
      trim: true,
    },
    listType: {
      type: String,
      trim: true,
    }
  }
});

const Hunt = mongoose.model("Hunt", huntSchema);

module.exports = Hunt;
