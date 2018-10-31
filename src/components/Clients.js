import React, { Component } from "react";
import { Button } from "react-materialize";
import "./Clients.css";
import { getUsers } from "../helpers/users";
import axios from "axios";

class Clients extends Component {
  state = {
    users: [],
    name: "",
    email: ""
  };
  async componentDidMount() {
    const fetchedUsers = await getUsers();
    this.setState({ users: fetchedUsers.data });
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();

    axios
      .post(`http://localhost:8000/api/user/`, {
        name: this.state.name,
        email: this.state.email
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div className={this.props.displayClients}>
        <div className="center">
          <table className="closed">
            <button className="closebutton" onClick={this.props.buttonClick2}>
              X
            </button>
          </table>
          <table className="clients">
            <td className="borders">
              <h3>Clients</h3>
            </td>

            <td className="borders">
              <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <label>
                  Add Client:
                  <input
                    className="browser-default"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                  />
                </label>

                <label>
                  Email:
                  <input
                    className="browser-default"
                    type="text"
                    name="email"
                    onChange={this.handleEmail}
                  />
                </label>
                <Button
                  floating
                  icon="add"
                  className="right green"
                  type="submit"
                />
              </form>
            </td>
          </table>

          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Rating</th>
            </tr>
            <tr>
              <td className="tablecolors">
                {this.state.users.map(name => (
                  <tr key={name.id}>{name.name}</tr>
                ))}
              </td>
              <td className="emails">
                {this.state.users.map(email => (
                  <tr key={email.id}>{email.email}</tr>
                ))}
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Clients;
