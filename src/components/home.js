import React from "react";
import {Link} from "react-router-dom";


class Home extends React.Component{
  render(){
    return (
      <div className="home">
  
        <header className="header">
          <h1 className="title"></h1>
          <Link to="/login">
          <button className="login-btn"></button>
          </Link>
        </header>
  
        <div className="hero">
          <img className="hero-img" />
          <p className="hero-info"></p>
        </div>
  
        <footer className="footer"></footer>
      </div>
    )
  }
}

export default Home;