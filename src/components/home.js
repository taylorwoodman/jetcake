import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <header className="header">
          <h1 className="title">Hello</h1>
          <Link to="/login">
            <button className="login-btn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="login-btn">Sign Up</button>
          </Link>
        </header>

        <div className="hero">
          <img className="hero-img" src="supermanflying.png" />
          <p className="hero-info">This is Superman, look at him fly!</p>
        </div>

        <footer className="footer"></footer>
      </div>
    );
  }
}

export default Home;
