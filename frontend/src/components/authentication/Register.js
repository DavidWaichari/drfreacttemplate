import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: ""
  };
  handleOnchange = () => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const registrationdetails = {
      username: this.state.username,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2
    };

    axios
      .post("/rest-auth/registration/", registrationdetails)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
  render() {
    return (
      <React.Fragment>
        <h3>Registration</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password1"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleOnchange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleOnchange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default Register;
