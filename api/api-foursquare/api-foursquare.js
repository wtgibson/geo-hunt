const request = require('request');
const axios = require('axios');

queryTerm = "coffee"

apiRequestType = ["search", "explore"]

request(
  {
    url: 'https://api.foursquare.com/v2/venues/explore',
    method: 'GET',
    qs: {
      client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
      client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
      ll: '40.7243,-74.0018',
      query: 'coffee',
      v: '20180323',
      limit: 1,
    },
  },
  function(err, res, body) {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  }
);

request();

export default request;

// apiFoursquareResults = query => {
//   var queryURI = encodeURI(query);

//   var queryURL = "https://api.foursquare.com/v2/venues/explore" + queryURI

//   axios.get(queryURL)
//     .then(res => {
//         const locationInfo = res.data;
//         console.log(locationInfo);
//         // this.setState({ books: books.items });                
//     })

// }

// apiFoursquareResults(queryTerm);

// Sample API Response

// // Response shortened to display relevant information
// {
//   "meta": {
//     "code": 200,
//     "requestId": "5991c2dbdd57972dfdf5831b"
//   },
//   "response": {
//     "headerLocation": "SoHo",
//     "headerFullLocation": "SoHo, New York",
//     "headerLocationGranularity": "neighborhood",
//     "query": "coffee",
//     "totalResults": 101,
//     "groups": [
//       {
//         "items": [
//           {
//             "venue": {
//               "id": "573498df498e6df2eb8b36a7",
//               "name": "La Colombe Torrefaction",
//               "location": {
//                 "address": "154 Prince St",
//                 "crossStreet": "B/T W. Broadway & Thompson",
//                 "lat": 40.7258839175593,
//                 "lng": -74.0010660462815,
//                 "distance": 186,
//                 "postalCode": "10012",
//                 "cc": "US",
//                 "city": "New York",
//                 "state": "NY",
//                 "country": "United States",
//                 "formattedAddress": [
//                   "154 Prince St (B/T W. Broadway & Thompson)",
//                   "New York, NY 10012",
//                   "United States"
//                 ]
//               },
//               "categories": [
//                 {
//                   "id": "4bf58dd8d48988d1e0931735",
//                   "name": "Coffee Shop",
//                   "pluralName": "Coffee Shops",
//                   "shortName": "Coffee Shop",
//                   "icon": {
//                     "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop*",
//                     "suffix": ".png"
//                   },
//                   "primary": true
//                 }
//               ],
//               "stats": {
//                 "checkinsCount": 2097,
//                 "usersCount": 893,
//                 "tipCount": 12
//               },
//               "url": "https://lacolombe.com",
//               "price": {
//                 "tier": 1,
//                 "message": "Cheap",
//                 "currency": "$"
//               },
//               "rating": 9.2,
//               "hours": {
//                 "status": "Likely open",
//                 "isOpen": true,
//                 "isLocalHoliday": false
//               },
//               "hereNow": {
//                 "count": 1,
//                 "summary": "One other person is here"
//               }
//             },
//             "tips": [
//               {
//                 "createdAt": 1468075940,
//                 "text": "The iced coffee is no longer an iced red eye, it's cold brew. If you want the red eye ask for it; it's the same price.",
//                 "type": "user",
//                 "canonicalUrl": "https://foursquare.com/item/57810fa4498e1542398875fa",
//                 "likes": {
//                   "count": 1,
//                   "groups": [],
//                   "summary": "1 like"
//                 },
//                 "agreeCount": 3,
//                 "user": {}
//               }
//             ],
//             "referralId": "e-0-573498df498e6df2eb8b36a7-0"
//           }
//         ]
//       }
//     ]
//   }
// }

// Google Books API Reference

// searchBooks = query => {
//   var queryURI = encodeURI(query);

//   var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + queryURI

//   axios.get(queryURL)
//       .then(res => {
//           const books = res.data;
//           // console.log(books);
//           this.setState({ books: books.items });                
//       })
      


// }

// saveBook = (book) => {
//   // console.log(book) 
//    axios.post("/api/books/", book)
//    .then(console.log("Saved Book Object: " , book))        
//    .catch((e) => {
//    console.log("Error Saving Book Object: " , book)
//    })         
// }
