import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TimeTracker from "./components/TimeTracker.jsx";

class App extends Component {
  state = {
    users: [],
    invisible: "invisible"
  };
  async componentDidMount() {
    const result = await axios.get("http://localhost:8000/api/user");
    this.setState({ users: result.data });
  }

  appear = () => {
    this.setState({ invisible: "" });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.appear()}>TimeTracker</button>
        <div className={this.state.invisible}>
          <TimeTracker />>
        </div>
        <ul>
          {this.state.users.map(user => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
