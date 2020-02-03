import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
import Signup from "./components/signup";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: ""
    };
  }

  updateUser = user => {
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home user={this.state.user} updateUser={this.updateUser} />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <Login user={this.state.user} updateUser={this.updateUser} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={() => (
                <Signup user={this.state.user} updateUser={this.updateUser} />
              )}
            />
            <Route
              exact
              path="/profile"
              render={() => (
                <Profile user={this.state.user} updateUser={this.updateUser} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
