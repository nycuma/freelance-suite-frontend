import React from 'react';
import './TimeTracker.css';
import { getTasks } from '../helpers/tasks';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import moment from 'moment';
import axios from 'axios';

// import { Icon, Modal, Button, Navbar } from "react-materialize";

class TimeTracker extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      sec: '00',
      min: '00',
      hour: '00',
      fire: '',
      users: [],
      display: this.props.displayState,
      create: '',
      start: '',
      end: '',
      duration: '',
      tasks: [],
      taskid: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const fetchedUsers = await getTasks();
    this.setState({ tasks: fetchedUsers.data });
  }
  handleChange(event) {
    this.setState({ taskid: event.target.value });
    console.log(this.state.taskid);
  }

  disappear = () => {
    this.setState({ display: 'invisible' });
  };

  add = () => {
    let seconds = parseInt(this.state.sec, 10);
    let minutes = parseInt(this.state.min, 10);
    let hours = parseInt(this.state.hour, 10);
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
    let s = '000000000' + seconds;
    this.setState({ sec: s.substr(s.length - 2) });
    let m = '000000000' + minutes;
    this.setState({ min: m.substr(m.length - 2) });
    let h = '000000000' + hours;
    this.setState({ hour: h.substr(h.length - 2) });
  };

  /* Start button */
  start = () => {
    this.setState({ create: moment().format('MMMM Do YYYY, h:mm:ss a') });
    this.setState({ fire: setInterval(this.add, 1000) });
  };
  /* Stop button */

  stop = () => {
    clearInterval(this.state.fire);
    let seconds = parseInt(this.state.sec, 10);
    let minutes = parseInt(this.state.min, 10);
    let hours = parseInt(this.state.hour, 10);

    var now = moment();

    let dura = hours * 60 + minutes * 60 + seconds;

    var then = moment().subtract(dura, 'seconds');
    this.setState({ start: then });
    this.setState({ end: now });
    this.setState({ duration: dura });

    //console.log(then.format("MMMM Do YYYY, h:mm:ss a"));
    //console.log(now);
    // console.log(dura);
  };

  /* Clear button */
  clear = () => {
    clearInterval(this.state.fire);
    this.setState({ sec: '00' });
    this.setState({ min: '00' });
    this.setState({ hour: '00' });
  };
  submit = () => {
    const sessions = {
      start: this.state.start,
      end: this.state.end,
      duration: this.state.duration,
    };
    console.log(sessions);
    axios
      .post(
        `http://localhost:8000/api/task/${this.state.taskid}/sessions`,

        sessions
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className={this.props.displayState}>
        <div className="container">
          <div className="closediv">
            <button className="closebutton" onClick={this.props.buttonClick}>
              X
            </button>
          </div>
          <div className="header">
            <div>
              <h3>Time Tracker</h3>
            </div>
          </div>
          <div className="main">
            <div className="time">
              {this.state.hour}:{this.state.min}:{this.state.sec}
            </div>
            <div className="buttons">
              <button
                className="waves-effect waves-light btn-small"
                onClick={() => this.start()}>
                Start
              </button>
              <button
                className="waves-effect waves-light btn-small pause"
                onClick={() => this.stop()}>
                ||
              </button>
              <button
                className="waves-effect waves-light btn-small"
                onClick={() => this.clear()}>
                Reset
              </button>
            </div>
          </div>

          <div className="main2">
            <div className="align">
              <select className="browser-default dropdown" name="Project">
                <option>Project 1</option>
              </select>
            </div>
            <div className="align2">
              <select
                className="browser-default dropdown"
                name="Task"
                onChange={this.handleChange}>
                {this.state.tasks.map(task => (
                  <option value={task._id} key={task._id}>
                    {task.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="footer">
            <div className="input-field">
              <input type="text" />
              <label htmlFor="input_text">Comments</label>
            </div>

            <button
              className="waves-effect waves-light btn-small prefix submit"
              onClick={() => this.submit()}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TimeTracker;
