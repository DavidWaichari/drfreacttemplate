import React, { Component } from "react";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
class App extends Component {
  render() {
    return (
      <div>
        <h3>Hello from app Component</h3>
        <Login />
        <Register />
      </div>
    );
  }
}
export default App;
