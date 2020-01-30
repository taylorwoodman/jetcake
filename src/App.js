import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Profile from "./components/profile";
import Signup from "./components/signup";
import './App.css';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      user: "",
      authenticated: false
    }
  }
  render(){

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route 
            exact path="/"
            render={<Home />}
            />
            <Route path="/login"
            render={<Login />}
            />
            <Route path="/signup"
            render={<Signup />}
            />
            <Route path="/profile"
            render={<Profile />}
            />
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
