import React from "react";
import TimeTracker from "./TimeTracker";

class Navbar extends React.Component {
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
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
              <img src={require("./img/rocket-launch.svg")} />
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a
                  class="waves-effect waves-light btn modal-trigger"
                  href="#modal1"
                  onClick={() => this.appear()}
                >
                  Time Tracker
                </a>
              </li>

              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Sign Up</a>
              </li>
              <li>
                <a href="">Sign In</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#">Sign In</a>
          </li>
        </ul>

        <div id="modal1" class={this.state.modal}>
          <div class="modal-content">
            <a
              href="#!"
              class="modal-close waves-effect waves-green btn-flat right"
              onClick={() => this.disappear()}
            >
              X
            </a>
            <TimeTracker />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
