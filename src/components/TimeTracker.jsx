import React from 'react';
import './TimeTracker.css';
import { getTasksForProject } from '../helpers/tasks';
import { getProjects } from '../helpers/projects';
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
      projects: [],
      selectedProjectId: '',
      tasks: [],
      selectedTaskId: '',
    };

    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.handleChangeProject = this.handleChangeProject.bind(this);
  }

  async componentDidMount() {
      // fetching all projects
      const fetchedProjects = await getProjects()
      this.setState({ projects: fetchedProjects.data })
  }

  async handleChangeProject(event) {
    const projectId = event.target.value;
    console.log('selected project ' + projectId);

    const fetchedTasks = await getTasksForProject(projectId);
    this.setState({ 
      selectedProjectId: projectId,
      tasks: fetchedTasks.data.tasks ? fetchedTasks.data.tasks : []
    });
  }

  handleChangeTask(event) {
    this.setState({ selectedTaskId: event.target.value });
    console.log('selected task ' + event.target.value);
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
        `http://localhost:8000/api/task/${this.state.selectedTaskId}/sessions`,

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
              <select 
                className="browser-default dropdown" 
                name="Project"
                onChange={this.handleChangeProject}>
                <option></option>
                {this.state.projects.map(project => (
                  <option value={project._id} key={project._id}>
                    {project.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="align2">
              <select
                className="browser-default dropdown"
                name="Task"
                onChange={this.handleChangeTask}>
                <option></option>
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
