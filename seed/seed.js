const mongoose = require("mongoose");
const Hunt = require("../models/Hunt.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/geohunt");

// const request = require('request');
// const fetch = require("node-fetch");

const huntSeed1 = {
    targetInfo: {
        targetName: "Twin Peaks",
        targetId: "4c29567f9fb5d13aa2139b57",
        targetLat: "37.7542",
        targetLng: "-122.4471",
        targetAccuracy: 0.025,
        targetCategory: "Hills",
        targetLikes: "1787 Likes",
        targetAddress: "100 Christmas Tree Point Rd San Francisco, CA 94114 United States",
        targetCrossStreets: "at Twin Peaks Blvd",
        targetNeighborhood: "Financial District",
        targetFactoid: "Twin Peaks are NOT the tallest hills in San Francisco. At approximately 925 ft tall, they are actually a few feet shorter than Mt. Davidson at 928 ft. The northern peak is called Eureka, and the southern peak is called Noe.",
        targetPhoto: "https://en.wikipedia.org/wiki/File:Twin_Peaks-San_Francisco.jpg",
        targetGooglePlacesId: "ChIJp71fQgh-j4ARV7YEtWUmni0",
        targetRating: "",
        targetVicinity: "",
        targetTypes: [""],
        targetURL: ""
    },
    clues: {
        clue1: "It’s very high up",
        clue2: "Santa Ana Mountain is just visible from here",
        clue3: "Think of a TV Show by David Lynch",
        clue4: "Contains a point named after a holiday decoration",
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
        targetId: "49d01698f964a520fd5a1fe3",
        targetLat: "37.8199",
        targetLng: "-122.4783",
        targetAccuracy: 0.025,
        targetCategory: "Bridges",
        targetLikes: "4355 Likes",
        targetAddress: "Golden Gate Brg S San Francisco, CA United States",
        targetCrossStreets: "",
        targetNeighborhood: "",
        targetFactoid: "An internationally recognized symbol of San Francisco and the United States, the Golden Gate Bridge was the longest and tallest suspension bridge in the world at the time of its opening in 1937.",
        targetPhoto: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1MTc3MjE0MzExMDgxNTQ1/topic-golden-gate-bridge-gettyimages-177770941.jpg",
        targetGooglePlacesId: "",
        targetRating: "",
        targetVicinity: "",
        targetTypes: [""],
        targetURL: ""
    },
    clues: {
        clue1: "It requires a toll",
        clue2: "Made of Steel",
        clue3: "Opened in 1937",
        clue4: "Spans both San Francisco and Marin counties",
        clue5: "Was the largest of its kind at the time of opening",
        clue6: "Initially designed by Joseph Strauss",
        clue7: "Art Deco Design",
        clue8: "San Francisco Icon",      
        clue9: "One of the Wonders of the Modern World according to the American Society of Civil Engineers",
        clue10: "You’ll find it on virtually anything referencing the city"
    }
}

const huntSeed3 = {
  targetInfo: {
    targetName: "Palace of Fine Arts",
    targetId: "4468f484f964a5204f331fe3",
    targetLat: "37.8020",
    targetLng: "-122.4486",
    targetAccuracy: 0.025,
    targetCategory: "Historic Sites",
    targetLikes: "2171 Likes",
    targetAddress: "3301 Lyon St San Francisco, CA 94123 United States",
    targetCrossStreets: "btwn Bay & Jefferson St",
    targetNeighborhood: "Marina District",
    targetFactoid: "Originally built for the 1915 Panama-Pacific Exposition, the Palace of Fine Arts was preserved due to the efforts of Phoebe Apperson Hearst, mother of William Randolph Hearst.",
    targetPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Palaceofarts.jpg",
    targetGooglePlacesId: "",
    targetRating: "",
    targetVicinity: "",
    targetTypes: [""],
    targetURL: ""
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
        targetId: "535eafe1498e1fc7e9529605",
        targetLat: "37.7897",
        targetLng: "-122.3972",
        targetAccuracy: 0.025,
        targetCategory: "Buildings",
        targetLikes: "36 Likes",
        targetAddress: "415 Mission St San Francisco, CA 94105 United States",
        targetCrossStreets: "at 1st St",
        targetNeighborhood: "Financial District",
        targetFactoid: "Currently the largest building in San Francisco, the Saleforce Tower was ranked the best tall building worldwide in 2019 at the 17th Annual Council on Tall Buildings and Urban Habitat.",
        targetPhoto: "https://static.dezeen.com/uploads/2019/04/ctbuh-awards-salesforce-tower-jason-orear-news-tallest-building-architecture-2019-dezeen_col1-852x1340.jpg",
        targetGooglePlacesId: "",
        targetRating: "",
        targetVicinity: "",
        targetTypes: [""],
        targetURL: ""
    },
    clues: {
        clue1: "94105",
        clue2: "Tallest building in San Francisco",
        clue3: "Located in Financial District",
        clue4: "Does tours of specific floors roughly once a month",
        clue5: "Features an art installation at the top",
        clue6: "Usually only one artist contributes",
        clue7: "Has been sinking and slanting like the Leaning Tower of Piza",
        clue8: "Eye of Sauron Halloween 2018",      
        clue9: "Formerly known as Transbay Tower",
        clue10: "Has Salesforce as a tenent"
    }
}

const huntSeed5 = {
    targetInfo: {
        targetName: "Legion of Honor",
        targetId: "44d344bef964a52041361fe3",
        targetLat: "37.7845",
        targetLng: "-122.5008",
        targetAccuracy: 0.025,
        targetCategory: "Art Museums",
        targetLikes: "713 Likes",
        targetAddress: "100 34th Ave San Francisco, CA 94121 United States",
        targetCrossStreets: "btwn Grove & Hayes St",
        targetNeighborhood: "",
        targetFactoid: "A three-quarter-scale version of the Palais de la Légion d’Honneur, the Legion of Honor houses a collection spanning more than 6000 years.",
        targetPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Legion_of_Honor_at_night_%28cropped%29.jpg/928px-Legion_of_Honor_at_night_%28cropped%29.jpg",
        targetGooglePlacesId: "",
        targetRating: "",
        targetVicinity: "",
        targetTypes: [""],
        targetURL: ""
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
        clue10: "Occupies an elevated site in Lincoln Park"
    }
}

const huntSeed6 = {
    targetInfo: {
        targetName: "Palace Hotel",
        targetId: "449a73a9f964a52097341fe3",
        targetLat: "37.7881",
        targetLng: "-122.4019",
        targetAccuracy: 0.025,
        targetCategory: "Hotels",
        targetLikes: "576 Likes",
        targetAddress: "2 New Montgomery St San Francisco, CA 94105 United States",
        targetCrossStreets: "at Market St",
        targetNeighborhood: "Financial District",
        targetFactoid: "With over 600 rooms and suites, the Palace Hotel is one of the oldest buildings in San Francisco. It was here that Woodrow Wilson held a luncheon to support the Versailles Treaty in 1919.",
        targetPhoto: "https://r-cf.bstatic.com/images/hotel/max1024x768/111/111997586.jpg",
        targetGooglePlacesId: "",
        targetRating: "",
        targetVicinity: "",
        targetTypes: [""],
        targetURL: ""
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
        clue10: "Member of the Historic Hotels of America"
    }
}

const huntSeed7 = {
  targetInfo: {
    targetName: "War Memorial Opera House",
    targetId: "49c7dcc3f964a520c9571fe3",
    targetLat: "37.7785",
    targetLng: "-122.4207",
    targetAccuracy: 0.025,
    targetCategory: "Opera Houses",
    targetLikes: "528 Likes",
    targetAddress: "301 Van Ness Ave San Francisco, CA 94102 United States",
    targetCrossStreets: "at Grove St",
    targetNeighborhood: "",
    targetFactoid: "The original home of San Francisco Symphony, and current home of San Francisco Opera and Ballet, the War Memorial Opera House opened in 1932. It was also the location of the signing of the Treaty of San Francisco in 1951, declaring peace with Japan.",
    targetPhoto: "https://www.taittowers.com/wp-content/uploads/2017/04/war-memorial-opera-house.jpg",
    targetGooglePlacesId: "",
    targetRating: "",
    targetVicinity: "",
    targetTypes: [""],
    targetURL: ""
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

const huntSeed8 = {
    targetInfo: {
        targetName: "Columbus Tower",
        targetId: "51a146718bbd125aa462f685",
        targetLat: "37.7965",
        targetLng: "-122.4050",
        targetAccuracy: 0.025,
        targetCategory: "Buildings",
        targetLikes: "7 Likes",
        targetAddress: "916 Kearny St San Francisco, CA 94133 United States",
        targetCrossStreets: "Columbus Ave",
        targetNeighborhood: "Financial District",
        targetFactoid: "The building, known for its distinct Flatiron style structure, straddles North Beach, Chinatown, and the Financial District.",
        targetPhoto: "https://noehill.com/sf/landmarks/northbeach/sentinel_building_thumb.jpg",
        targetGooglePlacesId: "",
        targetRating: "",
        targetVicinity: "",
        targetTypes: [""],
        targetURL: ""
    },
    clues: {
        clue1: "94133",
        clue2: "Bounded by three different streets",
        clue3: "8 floors",
        clue4: "Copper outside",
        clue5: "Cafe Niebaum-Coppola",
        clue6: "Now Cafe Zoetrope",
        clue7: "Alternative names include Flatiron Building",
        clue8: "Sentinal Building",      
        clue9: "American Zoetrope is located here",
        clue10: "Street is Columbus"
    }
}

const huntSeed9 = {
  targetInfo: {
    targetName: "Strawberry Hill",
    targetId: "4c363d66ae2da59335d5fcc5",
    targetLat: "37.7686",
    targetLng: "-122.4753",
    targetAccuracy: 0.025,
    targetCategory: "Hills",
    targetLikes: "98 Likes",
    targetAddress: "Golden Gate Park San Francisco, CA United States",
    targetCrossStreets: "",
    targetNeighborhood: "",
    targetFactoid: "The hill, occupying an entire island in a man-made lake, also contains Huntington Falls, a waterfall named after one of the Big Four railroad barons.",
    targetPhoto: "https://goldengatepark.com/wp-content/uploads/2011/03/Waterfall-At-Stow-Lake-golden-gate-park.jpg",
    targetGooglePlacesId: "",
    targetRating: "",
    targetVicinity: "",
    targetTypes: [""],
    targetURL: ""
  },
  clues: {
    clue1: "94118",
    clue2: "Sounds like a Beatles Song, but not quite...",
    clue3: "Richmond District",
    clue4: "Inside Park",
    clue5: "Bridge Park",
    clue6: "Contains 110-ft tall artificial waterfall",
    clue7: "Also a pavilion presented by SF’s sister city, Taipei",
    clue8: "West of Shakespeare Garden",
    clue9: "East of Golden Gate Park Polo Field",
    clue10: "Fruit is in its name"
  }
}

const huntSeed10 = {
  targetInfo: {
    targetName: "Sutro Baths",
    targetId: "4a05e6dbf964a52098721fe3",
    targetLat: "37.7804",
    targetLng: "-122.5137",
    targetAccuracy: 0.025,
    targetCategory: "Historic Sites",
    targetLikes: "626 Likes",
    targetAddress: "Point Lobos Ave. San Francisco, CA 94121 United States",
    targetCrossStreets: "at Merrie Way",
    targetNeighborhood: "",
    targetFactoid: "Funded by self-made millionaire Adolph Sutro, the Sutro Baths were the largest indoor swimming pools in the world till the facility burned down in 1966.",
    targetPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sutro_Baths_interior%2C_circa_1896.jpg/340px-Sutro_Baths_interior%2C_circa_1896.jpg",
    targetGooglePlacesId: "",
    targetRating: "",
    targetVicinity: "",
    targetTypes: [""],
    targetURL: ""
  },
  clues: {
    clue1: "94121",
    clue2: "Upper West Side of City",
    clue3: "West of Legion of Honor",
    clue4: "Outer Richmond",
    clue5: "Built in 1896",
    clue6: "World’s largest of its kind",
    clue7: "Includes an ice skating rink",
    clue8: "And 2700-seat amphitheater",
    clue9: "And a museum of stuffed and mounted animals, historic artifacts, and artwork",
    clue10: "Baths"
  }
}

const huntSeed11 = {
  targetInfo: {
    targetName: "Pier 39",
    targetId: "409d7480f964a520f2f21ee3",
    targetLat: "37.8087",
    targetLng: "-122.4098",
    targetAccuracy: 0.025,
    targetCategory: "Piers",
    targetLikes: "1756 Likes",
    targetAddress: "2 Beach St San Francisco, CA 94133 United States",
    targetCrossStreets: "the Embarcadero",
    targetNeighborhood: "The Embarcadero",
    targetFactoid: "A popular tourist attraction, Pier 39 contains shops, restaurants, a video arcade, street performances, the Aquarium of the Bay, virtual 3D rides, and views of sea lions.",
    targetPhoto: "https://www.californiabeaches.com/wp-content/uploads/2016/06/pier-39-fishermans-wharf-san-francisco-1-1000x518.jpg",
    targetGooglePlacesId: "",
    targetRating: "",
    targetVicinity: "",
    targetTypes: [""],
    targetURL: ""
  },
  clues: {
    clue1: "94133",
    clue2: "Fisherman’s Wharf District",
    clue3: "Sea Lions",
    clue4: "First developed in 1978",
    clue5: "Can see Angel Island",
    clue6: "And Golden Gate Bridge",
    clue7: "And Bay Bridge",
    clue8: "Alcatraz is close",
    clue9: "Shopping Center",
    clue10: "Aquarium of the Bay"
  }
}

Hunt.remove({})
  .then(() => Hunt.collection.insertMany([huntSeed1, huntSeed2, huntSeed3, huntSeed4, huntSeed5, huntSeed6, huntSeed7, huntSeed8, huntSeed9, huntSeed10, huntSeed11]))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

