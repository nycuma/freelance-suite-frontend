import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "@reach/router";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          brand={<img src={require("./img/rocket-launch.svg")} alt="rocket" />}
          right
        >
          <NavItem right>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem right href="">
            <Link to="/signup">Sign Up</Link>
          </NavItem>
          <NavItem right href="">
            <Link to="/signin">Sign In</Link>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
