import React, { Component } from "react";
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

const request = require('request');
const axios = require('axios');

class CreateHunt extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.handleTargetPopulate = this.handleTargetPopulate.bind(this);

  }


  handleInputChange = event => {
    const name = event.target.name;
    const id = event.target.id;
    const value = event.target.value;
    console.log(name)
    console.log(id)
    console.log(value)
    this.setState({[id]:value
    });
    // console.log(this.state)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    this.createHunt(this.state);
  }

  handleTargetPopulate = event => {
    event.preventDefault();
    var that = this

    console.log(this.state)
    console.log(this.state.targetName);
    this.apiFoursquareSearch(this.state.targetName);
    this.forceUpdateHandler()
  }

  handleConsoleLogState = event => {
    event.preventDefault();
    console.log(this.state);
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  createHunt = (hunt) => {
    console.log(hunt) 
     axios.post("/api/createhunt/", hunt)
     .then(console.log("Saved Hunt Object: " , hunt))        
     .catch((e) => {
     console.log(e)
     })         
  }

  componentDidMount() {
    console.log("Mounted");  

  }

  apiFoursquareSearch(huntTarget) {
    console.log(huntTarget)
    var that = this
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

            // console.log("Target Location Name: " + target.name);
            // console.log("Target Location ID: " + target.id);
            // console.log("Target Location Latitude: " + target.location.lat);
            // console.log("Target Location Longitude: " + target.location.lng);    
            // console.log("Target Location Category: " + target.categories[0].pluralName);
            // // console.log("Target Location Category Icon: " + target.categories[0].icon.prefix + target.categories[0].icon.suffix);
            // console.log("Target Location Address: " + target.location.address + " " + target.location.formattedAddress[1] + " " + target.location.country);
            // console.log("Target Location Cross Street: " + target.location.crossStreet);
            // console.log("Target Location Neighborhood: " + target.location.neighborhood);  
            
            var name = target.name
            var id = target.id
            var lat = target.location.lat
            var lng = target.location.lng

            var category = target.categories[0].pluralName
            var address = target.location.address + " " + target.location.formattedAddress[1] + " " + target.location.country
            var crossStreet = target.location.crossStreet
            var neighborhood = target.location.neighborhood

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
                    // console.log("Target Location Likes: " + targetLikes);
                    var likes = targetLikes
                  }
                }
              );
            }
            apiFoursquareLikes(id, name)
            
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
              // console.log(name)
              // console.log("Google Places ID: " + placeId)
              
              var googleDetailsQueryURL = 'https://maps.googleapis.com/maps/api/place/details/json?place_id=' + placeId + '&fields=name,rating,photo,vicinity,url,type,icon,formatted_phone_number&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'
              url = googleDetailsQueryURL
              fetch(proxyurl + url)
              .then(response => { 
                return response.json()
              })
              .then(contents => {
                // console.log(contents)
                var googlePlacesData = contents.result

                // console.log("Google Places Name: " + googlePlacesData.name)
                // console.log("Google Places Phone Number: " + googlePlacesData.formatted_phone_number)
                // console.log("Google Places Icon: " + googlePlacesData.icon)
                // console.log("Google Places Rating: " + googlePlacesData.rating)
                // console.log("Google Places Vicinity: " + googlePlacesData.vicinity)
                // console.log("Google Places URL: " + googlePlacesData.url)

                var googleName = googlePlacesData.name
                var googlePhone = googlePlacesData.formatted_phone_number
                var googleIcon = googlePlacesData.icon
                var googleRating = googlePlacesData.rating
                var googleVicinity = googlePlacesData.vicinity
                var googleURL = googlePlacesData.url
                var googleTypes = []
                var googlePhotosLinks = []

                for (var i = 0; i < googlePlacesData.types.length; i++) {
                  // console.log(i);
                  // console.log("Google Places Types: " + googlePlacesData.types[i])
                  var googleType = googlePlacesData.types[i]
                  googleTypes.push(googleType)

                }
                for (var i = 0; i < googlePlacesData.photos.length; i++) {
                  // console.log(i);
                  // console.log(name)
                  // console.log("Google Places Photos References: " + googlePlacesData.photos[i].photo_reference)
                  var googlePhotoReference = googlePlacesData.photos[i].photo_reference

                  
                  var tempGooglePhotoReference = googlePlacesData.photos[i].photo_reference
                                    
                  var googlePhotosHref = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+ tempGooglePhotoReference + '&key=AIzaSyDPvvtVkeRawK_SaFf2Kb-MAUPjhV1GWNs'
                  
                  // console.log(name)
                  // console.log("Google Places Href: " + googlePhotosHref) 
                  
                  googlePhotosLinks.push(googlePhotosHref)
                  
                  that.setState({
                    targetName: name,
                    targetId: id,
                    targetLat: lat,
                    targetLng: lng,
                    targetAccuracy: 0.025,
                    targetCategory: category,
                    targetAddress: address,
                    targetCrossStreets: crossStreet,
                    targetPhoto: googlePhotosHref,
                    targetGooglePlacesId: placeId,
                    targetRating: googleRating,
                    targetVicinity: googleVicinity,
                    targetTypes: googleTypes,
                    targetURL: googleURL,                      
                  });
                                            
                }
              })                    
              .catch(error => console.log(error))
            })                    
            .catch(error => console.log(error))                        
            
          }         

          apiGoogleInfo(name)              
          
        }

      }
    );
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">GeoHunt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link href="/">Go Hunt</Nav.Link>
                <Nav.Link href="/createhunt">Create Hunt</Nav.Link>              
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Jumbotron>
          <h3 className="text-center">Create a Hunt for Others to Play Below</h3>          
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
                      <Form.Control name="targetInfo" type="text" placeholder="Target Name" onChange={this.handleInputChange} required/>
                      <Form.Check label="Required" />
                      <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 4 }}>
                          <Button type="submit" onClick={this.handleTargetPopulate} size="sm" block>AutoPopulate</Button>
                          <Form.Check label="AutoPopulate Boundary is San Francisco" />
                          {/* <Button type="submit" onClick={this.handleConsoleLogState} size="sm" block>Console Log State</Button> */}
                        </Col>
                      </Form.Group>                                            
                    </Col>                    
                  </Form.Group>                                     

                  <Form.Group as={Row} controlId="targetLat">
                    <Form.Label column sm={2}>
                      Latitude
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Latitude" onChange={this.handleInputChange, this.forceUpdateHandler} defaultValue={this.state.targetLat} value={this.state.targetLat} required/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="targetLng">
                    <Form.Label column sm={2}>
                      Longitude
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Longitude" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.targetLng}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      

                  <Form.Group as={Row} controlId="targetCategory">
                    <Form.Label column sm={2}>
                      Category
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Category" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.targetCategory}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      

                  <Form.Group as={Row} controlId="targetAddress">
                    <Form.Label column sm={2}>
                      Address
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Address" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.targetAddress}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="targetCrossStreets">
                    <Form.Label column sm={2}>
                      Cross Streets
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Cross Streets" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.targetCrossStreets}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="targetNeighborhood">
                    <Form.Label column sm={2} className="small">
                      Neighbor- hood
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Neighborhood" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.targetNeighborhood} required/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                                                                               
                  
                  <Form.Group as={Row} controlId="targetFactoid">
                    <Form.Label column sm={2}>
                      Target Fun Fact
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Fun Fact" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.targetFactoid} required/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="targetPhoto">
                    <Form.Label column sm={2}>
                      Target Photo Link
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="targetInfo" type="text" placeholder="Target Photo Link" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.targetPhoto}/>
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
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #1" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue1}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue2">
                    <Form.Label column sm={2}>
                      Clue #2
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #2" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue2}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue3">
                    <Form.Label column sm={2}>
                      Clue #3
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #3" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue3}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue4">
                    <Form.Label column sm={2}>
                      Clue #4
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #4" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue4}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue5">
                    <Form.Label column sm={2}>
                      Clue #5
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #5" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue5}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue6">
                    <Form.Label column sm={2}>
                      Clue #6
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #6" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue6}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue7">
                    <Form.Label column sm={2}>
                      Clue #7
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #7" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue7}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue8">
                    <Form.Label column sm={2}>
                      Clue #8
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #8" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue8}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row} controlId="clue9">
                    <Form.Label column sm={2}>
                      Clue #9
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #9" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue9}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="clue10">
                    <Form.Label column sm={2}>
                      Clue #10
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control name="clues" type="text" placeholder="Insert Clue #10" onChange={this.handleInputChange, this.forceUpdateHandler} value={this.state.clue10}/>
                      <Form.Check label="Required" />
                    </Col>
                  </Form.Group>                      
                  
                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit" onClick={this.handleFormSubmit}>Create Hunt</Button>
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

export default CreateHunt;