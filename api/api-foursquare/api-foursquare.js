const request = require('request');

function apiFoursquareSearch(huntTarget) {
  request(
    {
      url: 'https://api.foursquare.com/v2/venues/search',
      method: 'GET',
      qs: {
        client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
        client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
        // ll: '37.7542,-122.4471',
        // radius: 200,
        query: huntTarget,
        near: "San Francisco, CA",
        // categoryId: "4deefb944765f83613cdba6e",
        sortByDistance: 0,
        sortByPopularity: 1,
        v: '20180323',
        limit: 1,
      },
    },
    function(err, res, body) {
      if (err) {
        console.error(err);
      } else {
        var response = JSON.parse(body)
        var foursquareData = response.response.venues
        console.log(foursquareData);
        console.log("------Search------");
        for (var i = 0; i < foursquareData.length; i++) {
          var target = foursquareData[i];
          console.log(i);                                            
          // console.log(target);

          console.log("Target Location Name: " + target.name);
          console.log("Target Location ID: " + target.id);
          console.log("Target Location Latitude: " + target.location.lat);
          console.log("Target Location Longitude: " + target.location.lng);    
          console.log("Target Location Category: " + target.categories[0].pluralName);
          // console.log("Target Location Category Icon: " + target.categories[0].icon.prefix + target.categories[0].icon.suffix);
          console.log("Target Location Address: " + target.location.address + " " + target.location.formattedAddress[1] + " " + target.location.country);
          console.log("Target Location Cross Street: " + target.location.crossStreet);
          console.log("Target Location Neighborhood: " + target.location.neighborhood);  
          
          var name = target.name
          var id = target.id
          var lat = target.location.lat
          var lng = target.location.lng

          var category = target.categories[0].pluralName
          var address = target.location.address + " " + target.location.formattedAddress[1] + " " + target.location.country
          var crossStreet = target.location.crossStreet
          var neighborhood = target.location.neighborhood
          
        }

        function apiFoursquareLikes(id, name) {
          var targetId = id

          var name = name
      
          request(
            {
              url: 'https://api.foursquare.com/v2/venues/' + targetId + '/likes',
              method: 'GET',
              qs: {
                client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
                client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',   
                limit: 3,                                                  
                v: '20180323',
              },
            },
            function(err, res, body) {
              if (err) {
                console.error(err);
              } else {
                var response = JSON.parse(body)
                var foursquareData = response.response  
                console.log(foursquareData);
                console.log("------Likes------");
                var targetLikes = foursquareData.likes.summary
                console.log(name)
                console.log("Target Location Likes: " + targetLikes);
                var likes = targetLikes
              }
            }
          );
        }

        function apiFoursquareSimilar(id, name) {
          var targetId = id
          var name = name
      
          request(
            {
              url: 'https://api.foursquare.com/v2/venues/' + targetId + '/similar',
              method: 'GET',
              qs: {
                client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
                client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
                limit: 3,                                                     
                v: '20180323',
              },
            },
            function(err, res, body) {
              if (err) {
                console.error(err);
              } else {
                var response = JSON.parse(body)
                var foursquareData = response.response  
                console.log(foursquareData);
                console.log("------Similar------");          
                var similar = foursquareData.similarVenues.items
                for (var i = 0; i < similar.length; i++) {
                  console.log(i);
                  console.log(name)
                  console.log("Similar Location Name: " + similar[i].name);                                            
                  console.log("Similar Location ID: " + similar[i].id);
                  console.log("Similar Location Category: " + similar[i].categories[0].pluralName);
                  console.log("Similar Location Category Icon: " + similar[i].categories[0].icon.prefix + similar[i].categories[0].icon.suffix);
                  console.log("Similar Location Address: " + similar[i].location.address + " " + similar[i].location.formattedAddress[1] + " " + similar[i].location.country);
                  console.log("Similar Location Cross Street: " + similar[i].location.crossStreet);
                  console.log("Similar Location Neighborhood: " + similar[i].location.neighborhood);        
                  console.log("Similar Location Latitude: " + similar[i].location.lat);
                  console.log("Similar Location Longitude: " + similar[i].location.lng);     
                  
                  var similarName = similar[i].name
                  var similarId = similar[i].id
                  var similarLat = similar[i].location.lat
                  var similarLng = similar[i].location.lng

                  var similarCategory = similar[i].categories[0].pluralName
                  var similarAddress = similar[i].location.address + " " + similar[i].location.formattedAddress[1] + " " + similar[i].location.country
                  var similarCrossStreet = similar[i].location.crossStreet
                  var similarNeighborhood = similar[i].location.neighborhood
                }
              }
            }
          );
        }

        function apiFoursquareNext(id, name) {
          var targetId = id

          var name = name
      
          request(
            {
              url: 'https://api.foursquare.com/v2/venues/' + targetId + '/nextvenues',
              method: 'GET',
              qs: {
                client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
                client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',    
                limit: 3,                                 
                v: '20180323',
              },
            },
            function(err, res, body) {
              if (err) {
                console.error(err);
              } else {
                var response = JSON.parse(body)
                var foursquareData = response.response  
                console.log(foursquareData);
                console.log("------Next Venues------");          
                var next = foursquareData.nextVenues.items
                for (var i = 0; i < next.length; i++) {
                  console.log(i);
                  console.log(name);
                  console.log("Next Location Name: " + next[i].name);                                            
                  console.log("Next Location ID: " + next[i].id);
                  console.log("Next Location Category: " + next[i].categories[0].pluralName);
                  console.log("Next Location Category Icon: " + next[i].categories[0].icon.prefix + next[i].categories[0].icon.suffix);
                  console.log("Next Location Address: " + next[i].location.address + " " + next[i].location.formattedAddress[1] + " " + next[i].location.country);
                  console.log("Next Location Cross Street: " + next[i].location.crossStreet);
                  console.log("Next Location Neighborhood: " + next[i].location.neighborhood);        
                  console.log("Next Location Latitude: " + next[i].location.lat);
                  console.log("Next Location Longitude: " + next[i].location.lng);
                  
                  var nextName = next[i].name
                  var nextId = next[i].id
                  var nextLat = next[i].location.lat
                  var nextLng = next[i].location.lng

                  var nextCategory = next[i].categories[0].pluralName
                  var nextAddress = next[i].location.address + " " + next[i].location.formattedAddress[1] + " " + next[i].location.country
                  var nextCrossStreet = next[i].location.crossStreet
                  var nextNeighborhood = next[i].location.neighborhood
                }
              }
            }
          );
        }

        function apiFoursquareListed(id, name) {
          
          var targetId = id

          var name = name
      
          request(
            {
              url: 'https://api.foursquare.com/v2/venues/' + targetId + '/listed',
              method: 'GET',
              qs: {
                client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
                client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',   
                limit: 5,                 
                v: '20180323',
              },
            },
            function(err, res, body) {
              if (err) {
                console.error(err);
              } else {
                var response = JSON.parse(body)
                var foursquareData = response.response  
                console.log(foursquareData);
                console.log("------Venues Lists------");          
                var listed = foursquareData.lists.groups[0].items
                for (var i = 0; i < listed.length; i++) {
                  console.log(i);
                  console.log(name);
                  console.log("Location Listed Name: " + listed[i].name);
                  console.log("Location Listed ID: " + listed[i].id);                                            
                  console.log("Location Listed Description: " + listed[i].description);                    
                  console.log("Location Listed Item Count: " + listed[i].listItems.count);        
                  console.log("Location Listed Follower Count: " + listed[i].followers.count);
                  console.log("Location Listed Type: " + listed[i].type);                    

                  var listedName = listed[i].name
                  var listedId = listed[i].id                                         
                  var listedDescription = listed[i].description                    
                  var listedCount = listed[i].listItems.count      
                  var listedFollowers = listed[i].followers.count
                  var listedType = listed[i].type 
      
                }
              }
            }
          );
        }

        function apiGoogleInfo(name) {
  
          console.log("------Google Places Search------");                                                
      
          var input = name + " San Francisco, CA"
          var inputType = "textquery"
      
          var googleSearchQueryURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + input + '&inputtype=' + inputType + '&fields=place_id&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'
      
          const proxyurl = "https://cors-anywhere.herokuapp.com/";
          var url = googleSearchQueryURL; // site that doesn’t send Access-Control-*
          fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
          .then(response => { 
            return response.json()
          })
          .then(contents => {
      
            var placeId = contents.candidates[0].place_id
            console.log(name)
            console.log("Google Places ID: " + placeId)
            
            var googleDetailsQueryURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&fields=name,rating,photo,vicinity,url,type,icon,formatted_phone_number&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'
            url = googleDetailsQueryURL
            fetch(proxyurl + url)
            .then(response => { 
              return response.json()
            })
            .then(contents => {
              // console.log(contents)
              var googlePlacesData = contents.result

              console.log("Google Places Name: " + googlePlacesData.name)
              console.log("Google Places Phone Number: " + googlePlacesData.formatted_phone_number)
              console.log("Google Places Icon: " + googlePlacesData.icon)
              console.log("Google Places Rating: " + googlePlacesData.rating)
              console.log("Google Places Vicinity: " + googlePlacesData.vicinity)
              console.log("Google Places URL: " + googlePlacesData.url)

              var googleName = googlePlacesData.name
              var googlePhone = googlePlacesData.formatted_phone_number
              var googleIcon = googlePlacesData.icon
              var googleRating = googlePlacesData.rating
              var googleVicinity = googlePlacesData.vicinity
              var googleURL = googlePlacesData.url
              var googleTypes = []
              var googlePhotosLinks = []

              for (var i = 0; i < googlePlacesData.types.length; i++) {
                console.log(i);
                console.log("Google Places Types: " + googlePlacesData.types[i])
                var googleType = googlePlacesData.types[i]
                googleTypes.push(googleType)

              }
              for (var i = 0; i < googlePlacesData.photos.length; i++) {
                console.log(i);
                console.log(name)
                console.log("Google Places Photos References: " + googlePlacesData.photos[i].photo_reference)
                var googlePhotoReference = googlePlacesData.photos[i].photo_reference

                
                var tempGooglePhotoReference = googlePlacesData.photos[i].photo_reference
                                  
                var googlePhotosHref = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+ tempGooglePhotoReference + '&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'
                
                console.log(name)
                console.log("Google Places Href: " + googlePhotosHref) 
                
                googlePhotosLinks.push(googlePhotosHref)
      
                // url = googlePhotosHref
                // fetch(proxyurl + url)
                // .then(response => { 
                //   return response
                // })
                // .then(contents => {
                //   console.log(contents)}
                // )
              }
            })                    
            .catch(error => console.log(error))
          })                    
          .catch(error => console.log(error))
          
          
        }

      //   apiFoursquareLikes(id, name)

      //   apiFoursquareSimilar(id, name)

      //   apiFoursquareNext(id, name)

      //   apiFoursquareListed(id, name)

        apiGoogleInfo(name)
        
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

      }

    }
  );
}

// apiFoursquareSearch("Transamerica Building") 
