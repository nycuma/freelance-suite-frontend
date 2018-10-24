import React from "react";
import TimeTracker from "./TimeTracker";
import { Navbar, NavItem, Icon, Modal, Button } from "react-materialize";

class Navigation extends React.Component {
  state = {
    modal: "modal"
  };

  appear = () => {
    this.setState({ modal: "" });
  };
  disappear = () => {
    this.setState({ modal: "modal" });
  };
  render() {
    return (
      <div>
        <Navbar brand={<img src={require("./img/rocket-launch.svg")} />} right>
          <NavItem right onClick={() => this.appear()}>
            Time Tracker
          </NavItem>
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

        <div id="modal1" class={this.state.modal}>
          <div class="modal-content">
            <a
              href="#!"
              class="modal-close waves-effect waves-green btn-flat right"
              onClick={() => this.disappear()}
            >
              <Icon>close</Icon>
            </a>
            <TimeTracker />
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
