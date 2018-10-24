import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const result = await axios.get("http://localhost:8000/api/user");
    this.setState({ users: result.data });
  }

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
