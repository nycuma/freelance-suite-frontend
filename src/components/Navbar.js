import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from '@reach/router';


class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          brand={<img src={require("./img/rocket-launch.svg")} alt="rocket" />}
          right={true}
        >
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/signup">Sign Up</Link>
          </li>

          <li>
            <Link to="/signin">Sign In</Link>
          </li>

          <li>
            <Link to="/clients">Clients</Link>
          </li>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
