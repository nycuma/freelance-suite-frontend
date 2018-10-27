import React from "react";
import "./TimeTracker.css";
import { getUsers } from "../helpers/users";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Icon } from "react-materialize";

class TimeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      sec: "00",
      min: "00",
      hour: "00",
      fire: "",
      users: [],
      display: this.props.displayState
    };
  }

  async componentDidMount() {
    const fetchedUsers = await getUsers();
    this.setState({ users: fetchedUsers.data });
  }

  disappear = () => {
    this.setState({ display: "invisible" });
  };

  add = () => {
    let seconds = parseInt(this.state.sec);
    let minutes = parseInt(this.state.min);
    let hours = parseInt(this.state.hour);
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
        if (hours >= 60) {
          hours = 0;
          hours++;
        }
      }
    }
    let s = "000000000" + seconds;
    this.setState({ sec: s.substr(s.length - 2) });
    let m = "000000000" + minutes;
    this.setState({ min: m.substr(m.length - 2) });
    let h = "000000000" + hours;
    this.setState({ hour: h.substr(h.length - 2) });
  };

  /* Start button */
  start = () => {
    this.setState({ fire: setInterval(this.add, 1000) });
  };
  /* Stop button */

  stop = () => {
    clearInterval(this.state.fire);
  };

  /* Clear button */
  clear = () => {
    clearInterval(this.state.fire);
    this.setState({ sec: (this.state.sec = "00") });
    this.setState({ min: (this.state.min = "00") });
    this.setState({ hour: (this.state.hour = "00") });
  };

  render() {
    console.log(this.state.users);
    return (
      <div className={this.props.displayState}>
        <div className="container">
          <div className="header">
            <h3>Time Tracker</h3>
            <a
              href="#!"
              className="modal-close right"
              onClick={this.props.buttonClick}
            >
              <Icon>close</Icon>
            </a>
          </div>
          <div className="main">
            <div className="time">
              {this.state.hour}:{this.state.min}:{this.state.sec}
            </div>
            <div className="buttons">
              <button
                className="waves-effect waves-light btn-small"
                onClick={() => this.start()}
              >
                Start
              </button>
              <button
                className="waves-effect waves-light btn-small pause"
                onClick={() => this.stop()}
              >
                ||
              </button>
              <button
                className="waves-effect waves-light btn-small"
                onClick={() => this.clear()}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="main2">
            <div className="align">
              <select className="browser-default dropdown" name="Task">
                {this.state.users.map(user => (
                  <option key={user.id}>{user.name}</option>
                ))}
              </select>
            </div>
            <div className="align2">
              <select className="browser-default dropdown" name="Task">
                <option>Task 1</option>
                <option>Task 2</option>
                <option>Task 3</option>
                <option>Task 4</option>
              </select>
            </div>
          </div>

          <div className="footer">
            <div className="input-field">
              <input id="input_text" type="text" />
              <label for="input_text">Comments</label>
            </div>

            <button className="waves-effect waves-light btn-small prefix submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TimeTracker;
