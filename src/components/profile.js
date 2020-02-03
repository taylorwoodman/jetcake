import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      email: this.props.user.email,
      dateOfBirth: this.props.user.dateOfBirth,
      phoneNumber: this.props.user.phoneNumber,
      address: this.props.user.address,
      questionOne: this.props.user.questionOne,
      questionTwo: this.props.user.questionTwo,
      questionThree: this.props.user.questionThree,
      answerOne: this.props.user.answerOne,
      answerTwo: this.props.user.answerTwo,
      answerThree: this.props.user.answerThree
    };
  }

  componentDidMount = () => {
    axios.get("/users").then(response => this.props.updateUser(response.data));
  };

  handleInput = e => this.setState({ [e.target.name]: e.target.value });

  handleLogout = () => {
    axios.get("/logout");
  };

  render() {
    return (
      <div className="profile-container">
        <div className="profile">
          <input value={this.state.phoneNumber} />
          <input value={this.state.address} />
          <input value={this.state.email} />
          <input value={this.state.dateOfBirth} />
          <select></select>
          <select></select>
          <select></select>
          <button></button>
          <Link to="/login">
            <button onClick={this.handleLogout}>Logout</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Profile;
