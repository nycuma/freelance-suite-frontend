import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
