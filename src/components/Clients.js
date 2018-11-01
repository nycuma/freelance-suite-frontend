import React, { Component } from "react";
import { Button } from "react-materialize";
import "./Clients.css";
import { getUsers } from "../helpers/users";
import axios from "axios";
import { getCustomers } from "../helpers/customers";

class Clients extends Component {
  state = {
    users: [],
    name: "",
    email: "",
    id: ""
  };
  async componentDidMount() {
    const fetchedUsers = await getCustomers();
    console.log(fetchedUsers);
    this.setState({ users: fetchedUsers.data });
  }

  handleSubmit = event => {
    event.preventDefault();
    let customer = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(`http://localhost:8000/api/customer/`, {
        ...customer
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        customer._id = res.data._id;
        this.setState({ users: [...this.state.users, customer] });
      });
    event.target.reset();
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  handleEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleDelete = user => {
    axios.delete(`http://localhost:8000/api/customer/${user._id}`).then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({ users: this.state.users.filter(el => el !== user) });
    });

    console.log(this.state.id);
  };

  render() {
    return (
      <div className={this.props.displayClients}>
        <div className="center">
          <table className="closed">
            <tbody>
              <tr>
                <td>
                  <button
                    className="closebutton"
                    onClick={this.props.buttonClick2}
                  >
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="addclient">
            <div>
              <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <label>
                  Add Client:
                  <input
                    className="browser-default"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </label>

                <label>
                  Email:
                  <input
                    className="browser-default"
                    type="text"
                    name="email"
                    onChange={this.handleEmail}
                    value={this.state.email}
                  />
                </label>

                <Button floating icon="add" className="green" type="submit" />
              </form>
            </div>
          </div>

          <div className="grid">
            <div className="names">
              <span>
                <h3>Names</h3>
              </span>
              {this.state.users.map(name => (
                <div key={name._id}>{name.name}</div>
              ))}
            </div>
            <div className="emails">
              <span>
                <h3>Emails</h3>
              </span>
              {this.state.users.map(email => (
                <div key={email._id}>{email.email}</div>
              ))}
            </div>
            <div className="del">
              <span>
                <h3>Actions</h3>
              </span>
              {this.state.users.map(user => (
                <div key={user._id}>
                  <button
                    id={user._id}
                    className="closebutton"
                    onClick={() => this.handleDelete(user)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Clients;
