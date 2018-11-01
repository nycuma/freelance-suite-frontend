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
<<<<<<< HEAD
          <NavItem right="true" href="">
            About
          </NavItem>
          <NavItem right="true" href="">
            Sign Up
          </NavItem>
          <NavItem right="true" href="">
            Sign In
=======
          <NavItem right>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem right href="">
            <Link to="/signup">Sign Up</Link>
          </NavItem>
          <NavItem right href="">
            <Link to="/signin">Sign In</Link>
>>>>>>> bfd63eea156de285c2d69813c30cb1788ae407b0
          </NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
