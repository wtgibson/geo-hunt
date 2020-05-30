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
    targetNeighborhood: "",
    targetFactoid: "Twin Peaks are NOT the tallest hills in San Francisco. At approximately 925 ft tall, they are actually a few feet shorter than Mt. Davidson at 928 ft. The northern peak is called Eureka, and the southern peak is called Noe.",
    targetPhoto: "https://en.wikipedia.org/wiki/File:Twin_Peaks-San_Francisco.jpg",
    targetGooglePlacesId: "ChIJp71fQgh-j4ARV7YEtWUmni0",
    targetRating: "",
    targetVicinity: "",
    targetTypes: [""],
    targetURL: ""
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
    targetId: "4468f484f964a5204f331fe3",
    targetLat: "37.8020",
    targetLng: "-122.4486",
    targetAccuracy: 0.025,
    targetCategory: "Historic Sites",
    targetLikes: "2171 Likes",
    targetAddress: "3301 Lyon St San Francisco, CA 94123 United States",
    targetCrossStreets: "btwn Bay & Jefferson St",
    targetNeighborhood: "",
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
    targetNeighborhood: "",
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
    clue10: "Museum"
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
    targetNeighborhood: "",
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
    clue10: "Hotel"
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
    targetNeighborhood: "",
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
    clue2: "Building",
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
    targetNeighborhood: "",
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

// function apiFoursquareSearch(huntTarget) {
//     request(
//       {
//         url: 'https://api.foursquare.com/v2/venues/search',
//         method: 'GET',
//         qs: {
//           client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
//           client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
//           // ll: '37.7542,-122.4471',
//           // radius: 200,
//           query: huntTarget,
//           near: "San Francisco, CA",
//           // categoryId: "4deefb944765f83613cdba6e",
//           sortByDistance: 0,
//           sortByPopularity: 1,
//           v: '20180323',
//           limit: 1,
//         },
//       },
//       function(err, res, body) {
//         if (err) {
//           console.error(err);
//         } else {
//           var response = JSON.parse(body)
//           var foursquareData = response.response.venues
//           console.log(foursquareData);
//           console.log("------Search------");
//           for (var i = 0; i < foursquareData.length; i++) {
//             var target = foursquareData[i];
//             console.log(i);                                            
//             // console.log(target);

//             console.log("Target Location Name: " + target.name);
//             console.log("Target Location ID: " + target.id);
//             console.log("Target Location Latitude: " + target.location.lat);
//             console.log("Target Location Longitude: " + target.location.lng);    
//             console.log("Target Location Category: " + target.categories[0].pluralName);
//             // console.log("Target Location Category Icon: " + target.categories[0].icon.prefix + target.categories[0].icon.suffix);
//             console.log("Target Location Address: " + target.location.address + " " + target.location.formattedAddress[1] + " " + target.location.country);
//             console.log("Target Location Cross Street: " + target.location.crossStreet);
//             console.log("Target Location Neighborhood: " + target.location.neighborhood);  

//             var name = target.name
//             var id = target.id
//             var lat = target.location.lat
//             var lng = target.location.lng

//             var category = target.categories[0].pluralName
//             var address = target.location.address + " " + target.location.formattedAddress[1] + " " + target.location.country
//             var crossStreet = target.location.crossStreet
//             var neighborhood = target.location.neighborhood

//           }

//           function apiFoursquareLikes(id, name) {
//             var targetId = id

//             var name = name

//             request(
//               {
//                 url: 'https://api.foursquare.com/v2/venues/' + targetId + '/likes',
//                 method: 'GET',
//                 qs: {
//                   client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
//                   client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',   
//                   limit: 3,                                                  
//                   v: '20180323',
//                 },
//               },
//               function(err, res, body) {
//                 if (err) {
//                   console.error(err);
//                 } else {
//                   var response = JSON.parse(body)
//                   var foursquareData = response.response  
//                   console.log(foursquareData);
//                   console.log("------Likes------");
//                   var targetLikes = foursquareData.likes.summary
//                   console.log(name)
//                   console.log("Target Location Likes: " + targetLikes);
//                   var likes = targetLikes
//                 }
//               }
//             );
//           }

//           function apiFoursquareSimilar(id, name) {
//             var targetId = id
//             var name = name

//             request(
//               {
//                 url: 'https://api.foursquare.com/v2/venues/' + targetId + '/similar',
//                 method: 'GET',
//                 qs: {
//                   client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
//                   client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
//                   limit: 3,                                                     
//                   v: '20180323',
//                 },
//               },
//               function(err, res, body) {
//                 if (err) {
//                   console.error(err);
//                 } else {
//                   var response = JSON.parse(body)
//                   var foursquareData = response.response  
//                   console.log(foursquareData);
//                   console.log("------Similar------");          
//                   var similar = foursquareData.similarVenues.items
//                   for (var i = 0; i < similar.length; i++) {
//                     console.log(i);
//                     console.log(name)
//                     console.log("Similar Location Name: " + similar[i].name);                                            
//                     console.log("Similar Location ID: " + similar[i].id);
//                     console.log("Similar Location Category: " + similar[i].categories[0].pluralName);
//                     console.log("Similar Location Category Icon: " + similar[i].categories[0].icon.prefix + similar[i].categories[0].icon.suffix);
//                     console.log("Similar Location Address: " + similar[i].location.address + " " + similar[i].location.formattedAddress[1] + " " + similar[i].location.country);
//                     console.log("Similar Location Cross Street: " + similar[i].location.crossStreet);
//                     console.log("Similar Location Neighborhood: " + similar[i].location.neighborhood);        
//                     console.log("Similar Location Latitude: " + similar[i].location.lat);
//                     console.log("Similar Location Longitude: " + similar[i].location.lng);     

//                     var similarName = similar[i].name
//                     var similarId = similar[i].id
//                     var similarLat = similar[i].location.lat
//                     var similarLng = similar[i].location.lng

//                     var similarCategory = similar[i].categories[0].pluralName
//                     var similarAddress = similar[i].location.address + " " + similar[i].location.formattedAddress[1] + " " + similar[i].location.country
//                     var similarCrossStreet = similar[i].location.crossStreet
//                     var similarNeighborhood = similar[i].location.neighborhood
//                   }
//                 }
//               }
//             );
//           }

//           function apiFoursquareNext(id, name) {
//             var targetId = id

//             var name = name

//             request(
//               {
//                 url: 'https://api.foursquare.com/v2/venues/' + targetId + '/nextvenues',
//                 method: 'GET',
//                 qs: {
//                   client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
//                   client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',    
//                   limit: 3,                                 
//                   v: '20180323',
//                 },
//               },
//               function(err, res, body) {
//                 if (err) {
//                   console.error(err);
//                 } else {
//                   var response = JSON.parse(body)
//                   var foursquareData = response.response  
//                   console.log(foursquareData);
//                   console.log("------Next Venues------");          
//                   var next = foursquareData.nextVenues.items
//                   for (var i = 0; i < next.length; i++) {
//                     console.log(i);
//                     console.log(name);
//                     console.log("Next Location Name: " + next[i].name);                                            
//                     console.log("Next Location ID: " + next[i].id);
//                     console.log("Next Location Category: " + next[i].categories[0].pluralName);
//                     console.log("Next Location Category Icon: " + next[i].categories[0].icon.prefix + next[i].categories[0].icon.suffix);
//                     console.log("Next Location Address: " + next[i].location.address + " " + next[i].location.formattedAddress[1] + " " + next[i].location.country);
//                     console.log("Next Location Cross Street: " + next[i].location.crossStreet);
//                     console.log("Next Location Neighborhood: " + next[i].location.neighborhood);        
//                     console.log("Next Location Latitude: " + next[i].location.lat);
//                     console.log("Next Location Longitude: " + next[i].location.lng);

//                     var nextName = next[i].name
//                     var nextId = next[i].id
//                     var nextLat = next[i].location.lat
//                     var nextLng = next[i].location.lng

//                     var nextCategory = next[i].categories[0].pluralName
//                     var nextAddress = next[i].location.address + " " + next[i].location.formattedAddress[1] + " " + next[i].location.country
//                     var nextCrossStreet = next[i].location.crossStreet
//                     var nextNeighborhood = next[i].location.neighborhood
//                   }
//                 }
//               }
//             );
//           }

//           function apiFoursquareListed(id, name) {

//             var targetId = id

//             var name = name

//             request(
//               {
//                 url: 'https://api.foursquare.com/v2/venues/' + targetId + '/listed',
//                 method: 'GET',
//                 qs: {
//                   client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
//                   client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',   
//                   limit: 5,                 
//                   v: '20180323',
//                 },
//               },
//               function(err, res, body) {
//                 if (err) {
//                   console.error(err);
//                 } else {
//                   var response = JSON.parse(body)
//                   var foursquareData = response.response  
//                   console.log(foursquareData);
//                   console.log("------Venues Lists------");          
//                   var listed = foursquareData.lists.groups[0].items
//                   for (var i = 0; i < listed.length; i++) {
//                     console.log(i);
//                     console.log(name);
//                     console.log("Location Listed Name: " + listed[i].name);
//                     console.log("Location Listed ID: " + listed[i].id);                                            
//                     console.log("Location Listed Description: " + listed[i].description);                    
//                     console.log("Location Listed Item Count: " + listed[i].listItems.count);        
//                     console.log("Location Listed Follower Count: " + listed[i].followers.count);
//                     console.log("Location Listed Type: " + listed[i].type);                    

//                     var listedName = listed[i].name
//                     var listedId = listed[i].id                                         
//                     var listedDescription = listed[i].description                    
//                     var listedCount = listed[i].listItems.count      
//                     var listedFollowers = listed[i].followers.count
//                     var listedType = listed[i].type 

//                   }
//                 }
//               }
//             );
//           }

//           function apiGoogleInfo(name) {

//             console.log("------Google Places Search------");                                                

//             var input = name + " San Francisco, CA"
//             var inputType = "textquery"

//             var googleSearchQueryURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + input + '&inputtype=' + inputType + '&fields=place_id&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'

//             const proxyurl = "https://cors-anywhere.herokuapp.com/";
//             var url = googleSearchQueryURL; // site that doesn’t send Access-Control-*
//             fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
//             .then(response => { 
//               return response.json()
//             })
//             .then(contents => {

//               var placeId = contents.candidates[0].place_id
//               console.log(name)
//               console.log("Google Places ID: " + placeId)

//               var googleDetailsQueryURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&fields=name,rating,photo,vicinity,url,type,icon,formatted_phone_number&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'
//               url = googleDetailsQueryURL
//               fetch(proxyurl + url)
//               .then(response => { 
//                 return response.json()
//               })
//               .then(contents => {
//                 // console.log(contents)
//                 var googlePlacesData = contents.result

//                 console.log("Google Places Name: " + googlePlacesData.name)
//                 console.log("Google Places Phone Number: " + googlePlacesData.formatted_phone_number)
//                 console.log("Google Places Icon: " + googlePlacesData.icon)
//                 console.log("Google Places Rating: " + googlePlacesData.rating)
//                 console.log("Google Places Vicinity: " + googlePlacesData.vicinity)
//                 console.log("Google Places URL: " + googlePlacesData.url)

//                 var googleName = googlePlacesData.name
//                 var googlePhone = googlePlacesData.formatted_phone_number
//                 var googleIcon = googlePlacesData.icon
//                 var googleRating = googlePlacesData.rating
//                 var googleVicinity = googlePlacesData.vicinity
//                 var googleURL = googlePlacesData.url
//                 var googleTypes = []
//                 var googlePhotosLinks = []

//                 for (var i = 0; i < googlePlacesData.types.length; i++) {
//                   console.log(i);
//                   console.log("Google Places Types: " + googlePlacesData.types[i])
//                   var googleType = googlePlacesData.types[i]
//                   googleTypes.push(googleType)

//                 }
//                 for (var i = 0; i < googlePlacesData.photos.length; i++) {
//                   console.log(i);
//                   console.log(name)
//                   console.log("Google Places Photos References: " + googlePlacesData.photos[i].photo_reference)
//                   var googlePhotoReference = googlePlacesData.photos[i].photo_reference


//                   var tempGooglePhotoReference = googlePlacesData.photos[i].photo_reference

//                   var googlePhotosHref = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+ tempGooglePhotoReference + '&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'

//                   console.log(name)
//                   console.log("Google Places Href: " + googlePhotosHref) 

//                   googlePhotosLinks.push(googlePhotosHref)

//                   // url = googlePhotosHref
//                   // fetch(proxyurl + url)
//                   // .then(response => { 
//                   //   return response
//                   // })
//                   // .then(contents => {
//                   //   console.log(contents)}
//                   // )
//                 }
//               })                    
//               .catch(error => console.log(error))
//             })                    
//             .catch(error => console.log(error))


//           }

//         //   apiFoursquareLikes(id, name)

//         //   apiFoursquareSimilar(id, name)

//         //   apiFoursquareNext(id, name)

//         //   apiFoursquareListed(id, name)

//           apiGoogleInfo(name)

//           var newHunt = {
//             targetInfo: {
//                 targetName: name,
//                 targetId: id,
//                 targetLat: lat,
//                 targetLng: lng,
//                 targetAccuracy: 0.025,
//                 targetCategory: category,
//                 targetLikes: likes,
//                 targetAddress: address,
//                 targetCrossStreets: crossStreet,
//                 targetNeighborhood: neighborhood,
//                 targetFactoid: "Insert Factoid",
//                 targetPhoto: googlePhotosLinks,
//                 targetGooglePlacesId: targetGooglePlacesId,
//                 targetRating: googleRating,
//                 targetVicinity: googleVicinity,
//                 targetTypes: googleTypes,
//                 targetURL: googleURL
//             },
//             clues: {
//                 clue1: "Insert Clue 1",
//                 clue2: "Insert Clue 2",
//                 clue3: "Insert Clue 3",
//                 clue4: "Insert Clue 4",
//                 clue5: "Insert Clue 5",
//                 clue6: "Insert Clue 6",
//                 clue7: "Insert Clue 7",
//                 clue8: "Insert Clue 8",      
//                 clue9: "Insert Clue 9",
//                 clue10: "Insert Clue 10"
//             }
//           }

//         }

//       }
//     );
//   }

// // apiFoursquareSearch("Transamerica Building")  

