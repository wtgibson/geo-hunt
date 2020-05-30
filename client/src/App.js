import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateHunt from "./components/CreateHunt/CreateHunt";

class App extends Component {

  render() {
    return (
      <div>        
        <CreateHunt/>
      </div>
    );
  }
};

export default App;