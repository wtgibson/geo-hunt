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
    targetAccuracy: {
      type: Number,
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
    },
    targetFactoid: {
      type: String,
      trim: true,
    },
    targetPhoto: {
      type: String,
      trim: true,
    },
    targetGooglePlaceId: {
      type: String,
      trim: true,
    },
    targetRating: {
      type: String,
      trim: true,
    },
    targetVicinity: {
      type: String,
      trim: true,
    },
    targetTypes: {
      type: String,
      trim: true,
    },
    targetURL: {
      type: String,
      trim: true,
    }
  },
  relatedInfo: {
    relatedLocation1: {
      relatedName: {
        type: String,
        trim: true,
      },
      relatedId: {
        type: String,
        trim: true,
      },
      relatedLat: {
        type: String,
        trim: true,
      },
      relatedLng: {
        type: String,
        trim: true,
      },
      relatedCategory: {
        type: String,
        trim: true,
      },
      relatedLikes: {
        type: String,
        trim: true,
      },
      relatedAddress: {
        type: String,
        trim: true,
      },
      relatedCrossStreets: {
        type: String,
        trim: true,
      },
      relatedNeighborhood: {
        type: String,
        trim: true,
      }
    },
    relatedLocation2: {
      relatedName: {
        type: String,
        trim: true,
      },
      relatedId: {
        type: String,
        trim: true,
      },
      relatedLat: {
        type: String,
        trim: true,
      },
      relatedLng: {
        type: String,
        trim: true,
      },
      relatedCategory: {
        type: String,
        trim: true,
      },
      relatedLikes: {
        type: String,
        trim: true,
      },
      relatedAddress: {
        type: String,
        trim: true,
      },
      relatedCrossStreets: {
        type: String,
        trim: true,
      },
      relatedNeighborhood: {
        type: String,
        trim: true,
      }
    },
    relatedLocation3: {
      relatedName: {
        type: String,
        trim: true,
      },
      relatedId: {
        type: String,
        trim: true,
      },
      relatedLat: {
        type: String,
        trim: true,
      },
      relatedLng: {
        type: String,
        trim: true,
      },
      relatedCategory: {
        type: String,
        trim: true,
      },
      relatedLikes: {
        type: String,
        trim: true,
      },
      relatedAddress: {
        type: String,
        trim: true,
      },
      relatedCrossStreets: {
        type: String,
        trim: true,
      },
      relatedNeighborhood: {
        type: String,
        trim: true,
      }
    }
  },
  listInfo: {
    listInfo1: {  
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
    },
    listInfo2: {  
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
  },
  clues: {
    clue1: {
      type: String,
      trim: true,
    },
    clue2: {
      type: String,
      trim: true,
    },
    clue3: {
      type: String,
      trim: true,
    },      
    clue4: {
      type: String,
      trim: true,
    },
    clue5: {
      type: String,
      trim: true,
    },
    clue6: {
      type: String,
      trim: true,
    },
    clue7: {
      type: String,
      trim: true,
    },
    clue8: {
      type: String,
      trim: true,
    },      
    clue9: {
      type: String,
      trim: true,
    },
    clue10: {
      type: String,
      trim: true,
    }
  }
});

const Hunt = mongoose.model("Hunt", huntSchema);

module.exports = Hunt;
