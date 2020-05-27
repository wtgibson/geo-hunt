import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

const request = require('request');

class App extends Component {
  // state = {
  //   books: [],
  //   bookSearch: ""
  // };

  // handleInputChange = event => {
  //   // Destructure the name and value properties off of event.target
  //   // Update the appropriate state
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   Router.get(this.state.title)
  //     .then(res => this.setState({ books: res.data.items }))
  //     .catch(err => console.log(err));
  // };
  componentDidMount() {
    console.log("Mounted");
    // this.apiFoursquareSearch();
    // this.apiFoursquareExplore();
    // this.apiFoursquareTrending();
    // this.apiFoursquareLikes();
    // // this.apiFoursquareCategories();
    // this.apiFoursquareSimilar();
    // this.apiFoursquareNext();
    // this.apiFoursquareListed();
    this.apiGoogleInfo();    

  }

  

  apiFoursquareSearch() {
    request(
      {
        url: 'https://api.foursquare.com/v2/venues/search',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
          ll: '37.77611954047747,-122.43338919043477',
          radius: 250,
          // query: 'Painted Ladies',
          // near: "San Francisco, CA",
          categoryId: "4deefb944765f83613cdba6e",
          sortByDistance: 1,
          sortByPopularity: 0,
          v: '20180323',
          limit: 20,
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
            console.log(target);
            console.log("Target Location Name: " + target.name);
            console.log("Target Location ID: " + target.id);
            console.log("Target Location Category: " + target.categories[0].pluralName);
            console.log("Target Location Category Icon: " + target.categories[0].icon.prefix + target.categories[0].icon.suffix);
            console.log("Target Location Address: " + target.location.address + " " + target.location.formattedAddress[1] + " " + target.location.country);
            console.log("Target Location Cross Street: " + target.location.crossStreet);
            console.log("Target Location Neighborhood: " + target.location.neighborhood);        
            console.log("Target Location Latitude: " + target.location.lat);
            console.log("Target Location Longitude: " + target.location.lng);    
          }
          
        }
      }
    );
  }

  apiFoursquareExplore() {
    request(
      {
        url: 'https://api.foursquare.com/v2/venues/explore',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
          ll: '37.77611954047747,-122.43338919043477',
          radius: 250,
          // query: 'Painted Ladies',
          // near: "San Francisco, CA",
          sortByDistance: 1,
          sortByPopularity: 0,
          v: '20180323',
          limit: 10,
        },
      },
      function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          var response = JSON.parse(body)
          var foursquareData = response.response.groups[0].items
          console.log(foursquareData);
          console.log("------Explore------");
          for (var i = 0; i < foursquareData.length; i++) {
            var recommended = foursquareData[i].venue;
            console.log(i);
            console.log("Recommended Location Name: " + recommended.name);                                            
            console.log("Recommended Location ID: " + recommended.id);
            console.log("Recommended Location Category: " + recommended.categories[0].pluralName);
            console.log("Recommended Location Category Icon: " + recommended.categories[0].icon.prefix + recommended.categories[0].icon.suffix);
            console.log("Recommended Location Address: " + recommended.location.address + " " + recommended.location.formattedAddress[1] + " " + recommended.location.country);
            console.log("Recommended Location Cross Street: " + recommended.location.crossStreet);
            console.log("Recommended Location Neighborhood: " + recommended.location.neighborhood);        
            console.log("Recommended Location Latitude: " + recommended.location.lat);
            console.log("Recommended Location Longitude: " + recommended.location.lng);            
          }          

        }
      }
    );
  }

  apiFoursquareTrending() {
    request(
      {
        url: 'https://api.foursquare.com/v2/venues/trending',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',
          ll: '37.77611954047747,-122.43338919043477',
          // radius: 250,
          // query: 'Painted Ladies',
          // near: "San Francisco, CA",
          sortByDistance: 1,
          sortByPopularity: 0,
          v: '20180323',
          limit: 10,
        },
      },
      function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          var response = JSON.parse(body)
          var foursquareData = response.response  
          console.log(foursquareData);
          console.log("------Trending------");
          for (var i = 0; i < foursquareData.length; i++) {
            var trending = foursquareData[i].venue;
            console.log(i);
            console.log("Trending Location Name: " + trending.name);                                            
            console.log("Trending Location ID: " + trending.id);
            console.log("Trending Location Category: " + trending.categories[0].pluralName);
            console.log("Trending Location Category Icon: " + trending.categories[0].icon.prefix + trending.categories[0].icon.suffix);
            console.log("Trending Location Address: " + trending.location.address + " " + trending.location.formattedAddress[1] + " " + trending.location.country);
            console.log("Trending Location Cross Street: " + trending.location.crossStreet);
            console.log("Trending Location Neighborhood: " + trending.location.neighborhood);        
            console.log("Trending Location Latitude: " + trending.location.lat);
            console.log("Trending Location Longitude: " + trending.location.lng);            
          }                                      

        }
      }
    );
  }

  apiFoursquareLikes() {
    var targetId = "4b9afa7ef964a520c1e835e3"

    request(
      {
        url: 'https://api.foursquare.com/v2/venues/' + targetId + '/likes',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',                    
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
          console.log("Target Location Likes: " + targetLikes);
        }
      }
    );
  }

  apiFoursquareCategories() {

    request(
      {
        url: 'https://api.foursquare.com/v2/venues/categories',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',                    
          v: '20180323',
        },
      },
      function(err, res, body) {
        if (err) {
          console.error(err);
        } else {
          var response = JSON.parse(body)
          var foursquareData = response.response.categories  
          console.log(foursquareData);
          console.log("------Categories------");
          for (var i = 0; i < foursquareData.length; i++) {
            var categories = foursquareData[i];
            console.log(i);
            console.log("Foursquare Categories Name: " + categories.pluralName);
            
            var subCategories1 = categories.categories                                            
            
            for (var j = 0; j < subCategories1.length; j++) {
            var subCategories2 = subCategories1[j];
            console.log(j);
            console.log("Foursquare Categories | SubCategories Name: " + categories.pluralName + " | " + subCategories2.name);                                            
                      
            } 
          }
           
          
        }
      }
    );
  }

  apiFoursquareSimilar() {
    var targetId = "4b9afa7ef964a520c1e835e3"

    request(
      {
        url: 'https://api.foursquare.com/v2/venues/' + targetId + '/similar',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',                    
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
            console.log("Similar Location Name: " + similar[i].name);                                            
            console.log("Similar Location ID: " + similar[i].id);
            console.log("Similar Location Category: " + similar[i].categories[0].pluralName);
            console.log("Similar Location Category Icon: " + similar[i].categories[0].icon.prefix + similar[i].categories[0].icon.suffix);
            console.log("Similar Location Address: " + similar[i].location.address + " " + similar[i].location.formattedAddress[1] + " " + similar[i].location.country);
            console.log("Similar Location Cross Street: " + similar[i].location.crossStreet);
            console.log("Similar Location Neighborhood: " + similar[i].location.neighborhood);        
            console.log("Similar Location Latitude: " + similar[i].location.lat);
            console.log("Similar Location Longitude: " + similar[i].location.lng);            
          }
        }
      }
    );
  }

  apiFoursquareNext() {
    var targetId = "4b9afa7ef964a520c1e835e3"

    request(
      {
        url: 'https://api.foursquare.com/v2/venues/' + targetId + '/nextvenues',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',                    
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
            console.log("Next Location Name: " + next[i].name);                                            
            console.log("Next Location ID: " + next[i].id);
            console.log("Next Location Category: " + next[i].categories[0].pluralName);
            console.log("Next Location Category Icon: " + next[i].categories[0].icon.prefix + next[i].categories[0].icon.suffix);
            console.log("Next Location Address: " + next[i].location.address + " " + next[i].location.formattedAddress[1] + " " + next[i].location.country);
            console.log("Next Location Cross Street: " + next[i].location.crossStreet);
            console.log("Next Location Neighborhood: " + next[i].location.neighborhood);        
            console.log("Next Location Latitude: " + next[i].location.lat);
            console.log("Next Location Longitude: " + next[i].location.lng);            
          }
        }
      }
    );
  }

  apiFoursquareListed() {
    var targetId = "4b9afa7ef964a520c1e835e3"

    request(
      {
        url: 'https://api.foursquare.com/v2/venues/' + targetId + '/listed',
        method: 'GET',
        qs: {
          client_id: 'WPTUDIG1IYQLHGO3JASEI035KXPADNU1T3VOSSGAJLXJHZTW',
          client_secret: 'GL2UART4XMP2F4KPIK0JBQRBARBAXKXKOO3GM5XYLCUA1HSS',   
          limit: 10,                 
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
            console.log("Location Listed Name: " + listed[i].name);
            console.log("Location Listed ID: " + listed[i].id);                                            
            console.log("Location Listed Description: " + listed[i].description);                    
            console.log("Location Listed Item Count: " + listed[i].listItems.count);        
            console.log("Location Listed Follower Count: " + listed[i].followers.count);
            console.log("Location Listed Type: " + listed[i].type);                                        

          }
        }
      }
    );
  }

  apiGoogleInfo() {
    
    console.log("------Google Places Search------");                                                

    var input = "Painted Ladies San Francisco, CA"
    var inputType = "textquery"

    var googleSearchQueryURL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + input + '&inputtype=' + inputType + '&fields=place_id&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = googleSearchQueryURL; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.json())
    .then(contents => console.log(contents))                    
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    
    var placeId ="ChIJuX92JKWAhYARxVmeb8DQIYQ"

    var googleDetailsQueryURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&fields=name,rating,photo,vicinity,url,type,icon,formatted_phone_number&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'
    url = googleDetailsQueryURL
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(contents => console.log(contents))                    
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }


  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          {/* <Route exact path="/" component={Search} /> */}
        </div>
      </Router>
    );
  }
};

export default App;

