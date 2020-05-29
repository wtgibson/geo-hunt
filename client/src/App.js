// import './App.css';
import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// import * as ReactBootstrap from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';



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

    var seedHuntTargets = ["Twin Peaks", "Golden Gate Bridge", "Palace of Fine Arts", "Salesforce Tower", "Legion of Honor", "Palace Hotel", "War Memorial Opera House", "Columbus Tower", "Strawberry Hill", "Sutro Baths", "Pier 39"] 

    for (var i = 0; i < seedHuntTargets.length; i++) {
      // console.log(i)
      // this.apiFoursquareSearch(seedHuntTargets[i]);
    } 

  }

  apiFoursquareSearch(huntTarget) {
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

          apiFoursquareLikes(id, name)

          apiFoursquareSimilar(id, name)

          apiFoursquareNext(id, name)

          apiFoursquareListed(id, name)

          apiGoogleInfo(name)
          
          // var newHunt = {
          //   targetInfo: {
          //       targetName: name,
          //       targetId: id,
          //       targetLat: lat,
          //       targetLng: lng,
          //       targetAccuracy: 0.025,
          //       targetCategory: category,
          //       targetLikes: likes,
          //       targetAddress: address,
          //       targetCrossStreets: crossStreet,
          //       targetNeighborhood: neighborhood,
          //       targetFactoid: "Insert Factoid",
          //       targetPhoto: googlePhotosLinks,
          //       targetGooglePlacesId: targetGooglePlacesId,
          //       targetRating: googleRating,
          //       targetVicinity: googleVicinity,
          //       targetTypes: googleTypes,
          //       targetURL: googleURL
          //   },
          //   relatedInfo: {
          //       relatedLocation1: {
          //           relatedName: nextName,
          //           relatedId: nextId,
          //           relatedLat: nextLat,
          //           relatedLng: nextLng,
          //           relatedCategory: nextCategory,
          //           relatedLikes: "",
          //           relatedAddress: nextAddress,
          //           relatedCrossStreets: nextCrossStreet,
          //           relatedNeighborhood: nextNeighborhood
          //       },
          //       relatedLocation2: {
          //           relatedName: similarName,
          //           relatedId: similarId,
          //           relatedLat: similarLat,
          //           relatedLng: similarLng,
          //           relatedCategory: similarCategory,
          //           relatedLikes: "",
          //           relatedAddress: similarAddress,
          //           relatedCrossStreets: similarCrossStreet,
          //           relatedNeighborhood: similarNeighborhood
          //       },
          //       relatedLocation3: {
          //           relatedName: "",
          //           relatedId: "",
          //           relatedLat: "",
          //           relatedLng: "",
          //           relatedCategory: "",
          //           relatedLikes: "",
          //           relatedAddress: "",
          //           relatedCrossStreets: "",
          //           relatedNeighborhood: ""
          //       }
          //   },
          //   listInfo: {
          //       listInfo1: {  
          //         listName: listedName,
          //         listDescription: listedDescription,
          //         listLength: listedCount,      
          //         listFollowers: listedFollowers,
          //         listType: listedType
          //       },
          //       listInfo2: {  
          //         listName: "",
          //         listDescription: "",
          //         listLength: "",      
          //         listFollowers: "",
          //         listType: ""
          //       }
          //   },
          //   clues: {
          //       clue1: "Insert Clue 1",
          //       clue2: "Insert Clue 2",
          //       clue3: "Insert Clue 3",
          //       clue4: "Insert Clue 4",
          //       clue5: "Insert Clue 5",
          //       clue6: "Insert Clue 6",
          //       clue7: "Insert Clue 7",
          //       clue8: "Insert Clue 8",      
          //       clue9: "Insert Clue 9",
          //       clue10: "Insert Clue 10"
          //   }
          // }

          // Hunt.collection.insertOne(newHunt)
          //   .then(data => {
          //   console.log(data.result.n + " records inserted!");
          //   process.exit(0);
          //   })
          //   .catch(err => {
          //   console.error(err);
          //   process.exit(1);
          //   });
        }

      }
    );
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">GeoHunt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link href="#home">Go Hunt</Nav.Link>
                <Nav.Link href="#link">Create Hunt</Nav.Link>              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Jumbotron>
          <h1 className="text-center">Create a Hunt for Others to Play Below</h1>          
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Container>
                <Form>
                  <Form.Group as={Row} controlId="targetName">
                    <Form.Label column sm={2}>
                      Location
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Name" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group> 

                  <Form.Group as={Row} controlId="targetLat">
                    <Form.Label column sm={2}>
                      Latitude
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Latitude" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="targetLng">
                    <Form.Label column sm={2}>
                      Longitude
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Latitude" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      

                  <Form.Group as={Row} controlId="targetCategory">
                    <Form.Label column sm={2}>
                      Category
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Category" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      

                  <Form.Group as={Row} controlId="targetAddress">
                    <Form.Label column sm={2}>
                      Address
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Address" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="targetCrossStreets">
                    <Form.Label column sm={2}>
                      Cross Streets
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Cross Streets" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="targetNeighborhood">
                    <Form.Label column sm={2} className="small">
                      Neighbor- hood
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Neighborhood" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                                                                               
                  
                  <Form.Group as={Row} controlId="targetFactoid">
                    <Form.Label column sm={2}>
                      Target Fun Fact
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Fun Fact" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="targetPhoto">
                    <Form.Label column sm={2}>
                      Target Photo Link
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Target Photo Link" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group> 
                </Form>
              </Container>
            </Col>
            <Col>
              <Container>
                <Form>                                         
                  <Form.Group as={Row} controlId="clue1">
                    <Form.Label column sm={2}>
                      Clue #1
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #1" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue2">
                    <Form.Label column sm={2}>
                      Clue #2
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #2" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue3">
                    <Form.Label column sm={2}>
                      Clue #3
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #3" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue4">
                    <Form.Label column sm={2}>
                      Clue #4
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #4" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue5">
                    <Form.Label column sm={2}>
                      Clue #5
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #5" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue6">
                    <Form.Label column sm={2}>
                      Clue #6
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #6" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue7">
                    <Form.Label column sm={2}>
                      Clue #7
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #7" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue8">
                    <Form.Label column sm={2}>
                      Clue #8
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #8" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue9">
                    <Form.Label column sm={2}>
                      Clue #9
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #9" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="clue10">
                    <Form.Label column sm={2}>
                      Clue #10
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type="text" placeholder="Clue #10" />
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit">Create Hunt</Button>
                    </Col>
                  </Form.Group>

                </Form>
              </Container>
            </Col>
          </Row>
        </Container>
            
      </div>
    );
  }
};

export default App;

export var newHunt;

export var apiFoursquareSearch = function() {
  return(
    apiFoursquareSearch()
  );
};