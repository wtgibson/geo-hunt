const mongoose = require("mongoose");
const Hunt = require("../models/Hunt.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/geohunt");

const huntSeed1 = {
    targetInfo: {
        targetName: "Twin Peaks",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.7542",
        targetLng: "-122.4471",
        targetAccuracy: 0.025,
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square",
        targetFactoid: "Twin Peaks are NOT the tallest hills in San Francisco. At approximately 925 ft tall, they are actually a few feet shorter than Mt. Davidson at 928 ft. The northern peak is called Eureka, and the southern peak is called Noe.",
        targetPhoto: "https://en.wikipedia.org/wiki/File:Twin_Peaks-San_Francisco.jpg"
    },
    relatedInfo1: {
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
    relatedInfo2: {
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
    relatedInfo3: {
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
    },
    clues: {
        clue1: "Contains a point named after a holiday decoration",
        clue2: "Santa Ana Mountain is just visible from here",
        clue3: "Think of a TV Show by David Lynch",
        clue4: "It’s very high up",
        clue5: "Incredible view of most of the city",
        clue6: "94114",
        clue7: "San Francisco Police Department Academy is nearby",
        clue8: "Elevation: 925 ft",      
        clue9: "Eureka and Noe",
        clue10: "aka Los Pechos de la Chola"
    }
}

const huntSeed2 = {
    targetInfo: {
        targetName: "Golden Gate Bridge",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.8199",
        targetLng: "-122.4783",
        targetAccuracy: 0.025,
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square",
        targetFactoid: "An internationally recognized symbol of San Francisco and the United States, the Golden Gate Bridge was the longest and tallest suspension bridge in the world at the time of its opening in 1937.",
        targetPhoto: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg"
    },
    relatedInfo1: {
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
    relatedInfo2: {
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
    relatedInfo3: {
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
    },
    clues: {
        clue1: "Art Deco Design",
        clue2: "Made of Steel",
        clue3: "Opened in 1937",
        clue4: "Spans both San Francisco and Marin counties",
        clue5: "Was the largest of its kind at the time of opening",
        clue6: "Initially designed by Joseph Strauss",
        clue7: "It requires a toll",
        clue8: "San Francisco Icon",      
        clue9: "One of the Wonders of the Modern World according to the American Society of Civil Engineers",
        clue10: "You’ll find it on virtually anything referencing the city"
    }
}

const huntSeed3 = {
    targetInfo: {
        targetName: "Palace of Fine Arts",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.8020",
        targetLng: "-122.4486",
        targetAccuracy: 0.025,
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square",
        targetFactoid: "Originally built for the 1915 Panama-Pacific Exposition, the Palace of Fine Arts was preserved due to the efforts of Phoebe Apperson Hearst, mother of William Randolph Hearst.",
        targetPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Palaceofarts.jpg"
    },
    relatedInfo1: {
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
    relatedInfo2: {
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
    relatedInfo3: {
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
    },
    clues: {
        clue1: "Beaux-Arts architecture",
        clue2: "Originally built in 1915 in order to exhibit works of art",
        clue3: "Conceived to evoke a decaying ruin of Ancient Rome",
        clue4: "Incorporated into imagery of the Sept of Baelor in ‘Game of Thrones",
        clue5: "Reconstructed in 1974 due to it resembling an actual ruin",
        clue6: "Smaller replica located in Disney’s California Adventure in Anaheim, CA",
        clue7: "Featured in film ‘Vertigo’",
        clue8: "Located in Marina District",      
        clue9: "94123",
        clue10: "Most prominent building is an open rotunda"
    }
}

const huntSeed4 = {
    targetInfo: {
        targetName: "Salesforce Tower",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.7897",
        targetLng: "-122.3972",
        targetAccuracy: 0.025,
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square",
        targetFactoid: "Currently the largest building in San Francisco, the Saleforce Tower was ranked the best tall building worldwide in 2019 at the 17th Annual Council on Tall Buildings and Urban Habitat.",
        targetPhoto: "https://static.dezeen.com/uploads/2019/04/ctbuh-awards-salesforce-tower-jason-orear-news-tallest-building-architecture-2019-dezeen_col1-852x1340.jpg"
    },
    relatedInfo1: {
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
    relatedInfo2: {
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
    relatedInfo3: {
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
    },
    clues: {
        clue1: "94105",
        clue2: "Skyscraper",
        clue3: "Located in Financial District",
        clue4: "Does tours of specific floors roughly once a month",
        clue5: "Features an art installation at the top",
        clue6: "Usually only one artist contributes",
        clue7: "Has been sinking and slanting like the Leaning Tower of Piza",
        clue8: "Eye of Sauron Halloween 2018",      
        clue9: "Tallest building in San Francisco",
        clue10: "Has Salesforce as a tenent"
    }
}

const huntSeed5 = {
    targetInfo: {
        targetName: "Legion of Honor",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.7845",
        targetLng: "-122.5008",
        targetAccuracy: 0.025,
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square",
        targetFactoid: "A three-quarter-scale version of the Palais de la Légion d’Honneur, the Legion of Honor houses a collection spanning more than 6000 years.",
        targetPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Legion_of_Honor_at_night_%28cropped%29.jpg/928px-Legion_of_Honor_at_night_%28cropped%29.jpg"
    },
    relatedInfo1: {
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
    relatedInfo2: {
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
    relatedInfo3: {
        nextName: "Alamo Square",
        nextId: "",
        nextLat: "37.7845",
        nextLng: "-122.5008",
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
    },
    clues: {
        clue1: "Near Golden Gate Bridge",
        clue2: "94121",
        clue3: "Sea Cliff",
        clue4: "Near Golf Course",
        clue5: "By the sea",
        clue6: "Lincoln Park",
        clue7: "Northeast of SF VA Medical Center",
        clue8: "Formerly owned by wife of sugar magnate",      
        clue9: "Constructed for 1915 Panama-Pacific International Exposition",
        clue10: "Museum"
    }
}

const huntSeed6 = {
    targetInfo: {
        targetName: "Palace Hotel",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.7881",
        targetLng: "-122.4019",
        targetAccuracy: 0.025,
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square",
        targetFactoid: "With over 600 rooms and suites, the Palace Hotel is one of the oldest buildings in San Francisco. It was here that Woodrow Wilson held a luncheon to support the Versailles Treaty in 1919.",
        targetPhoto: "https://r-cf.bstatic.com/images/hotel/max1024x768/111/111997586.jpg"
    },
    relatedInfo1: {
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
    relatedInfo2: {
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
    relatedInfo3: {
        nextName: "Alamo Square",
        nextId: "",
        nextLat: "37.7845",
        nextLng: "-122.5008",
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
    },
    clues: {
        clue1: "94105",
        clue2: "Largest of its kind in Western United States when first built",
        clue3: "Built in 1875",
        clue4: "Woodrow Wilson hosted luncheon in 1919",
        clue5: "Pied Piper painting",
        clue6: "Pied Piper Bar",
        clue7: "Garden Court is one of San Francisco’s most prestigious dining rooms",
        clue8: "Near Union Square",      
        clue9: "Building sold to Sheraton in 1954",
        clue10: "Hotel"
    }
}

const huntSeed7 = {
    targetInfo: {
        targetName: "War Memorial Opera House",
        targetId: "4b9afa7ef964a520c1e835e3",
        targetLat: "37.7785",
        targetLng: "-122.4207",
        targetAccuracy: 0.025,
        targetCategory: "Historic Sites",
        targetLikes: "1376",
        targetAddress: "Steiner St San Francisco, CA 94117 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "Alamo Square",
        targetFactoid: "The original home of San Francisco Symphony, and current home of San Francisco Opera and Ballet, the War Memorial Opera House opened in 1932. It was also the location of the signing of the Treaty of San Francisco in 1951, declaring peace with Japan.",
        targetPhoto: "https://www.taittowers.com/wp-content/uploads/2017/04/war-memorial-opera-house.jpg"
    },
    relatedInfo1: {
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
    relatedInfo2: {
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
    relatedInfo3: {
        nextName: "Alamo Square",
        nextId: "",
        nextLat: "37.7845",
        nextLng: "-122.5008",
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
    },
    clues: {
        clue1: "94102",
        clue2: "Hayes Valley",
        clue3: "Opened in 1932",
        clue4: "Houses two arts companies",
        clue5: "Was the historic groundbreaking site for an organizing assembly of famous worldwide organization",
        clue6: "Houses both Opera and Ballet companies",
        clue7: "Used to house Symphony as well",
        clue8: "Rebuilt in 1993",      
        clue9: "Near City Hall",
        clue10: "Across the street from Davies Symphony Hall"
    }
}

Hunt.remove({})
.then(() => Hunt.collection.insertMany([huntSeed1, huntSeed2, huntSeed3, huntSeed4, huntSeed5, huntSeed6, huntSeed7]))
.then(data => {
console.log(data.result.n + " records inserted!");
process.exit(0);
})
.catch(err => {
console.error(err);
process.exit(1);
});