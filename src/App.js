import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navbar";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Dashboard />
      </div>
    );
  }
}

export default App;
