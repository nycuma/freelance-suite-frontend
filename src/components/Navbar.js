import React from "react";
import { Navbar, NavItem } from "react-materialize";

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          brand={<img src={require("./img/rocket-launch.svg")} alt="rocket" />}
          right
        >
          <NavItem right href="">
            About
          </NavItem>
          <NavItem right href="">
            Sign Up
          </NavItem>
          <NavItem right href="">
            Sign In
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
