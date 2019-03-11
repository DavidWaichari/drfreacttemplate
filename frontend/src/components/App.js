import React, { Component } from "react";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Navbar from "./layout/Navbar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}
export default App;
