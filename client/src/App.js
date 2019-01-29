import React, { Component } from "react";
import "./App.css";
import Players from "./components/Dashboard.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Players />
        </header>
      </div>
    );
  }
}

export default App;
