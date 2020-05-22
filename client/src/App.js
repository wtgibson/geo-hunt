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
    this.apiFoursquare()
  }

  apiFoursquare() {
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

