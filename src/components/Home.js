import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="section">
          <div className="title">Welcome Freelancer!</div>

          <p className="intro">Congats, you have found the single best tool</p>
          <p className="rocket-para">to plan and track your awesome projects</p>

          <p>Get started right now!</p>
        </div>
      </div>
    );
  }
}

export default Home;
