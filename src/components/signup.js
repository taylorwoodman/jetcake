import React from "react";
import axios from "axios";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      phoneNumber: "",
      address: "",
      email: "",
      password: "",
      dateOfBirth: "",
      questionOne: "",
      questionTwo: "",
      questionThree: "",
      answerOne: "",
      answerTwo: "",
      answerThree: ""
    };
  }

  handleInput = e => this.setState({ [e.target.name]: e.target.value });

  handleSignUp = async () => {
    try {
      const body = {
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
        email: this.state.email,
        passwordHash: this.state.password,
        dateOfBirth: this.state.dateOfBirth,
        questionOne: this.state.questionOne,
        questionTwo: this.state.questionTwo,
        questionThree: this.state.questionThree,
        answerOne: this.state.answerOne,
        answerTwo: this.state.answerTwo,
        answerThree: this.state.answerThree
      };
      if (
        body.phoneNumber &&
        body.address &&
        body.email &&
        body.passwordHash &&
        body.dateOfBirth &&
        body.questionOne &&
        body.questionTwo &&
        body.questionThree &&
        body.answerOne &&
        body.answerTwo &&
        body.answerThree
      ) {
        await axios.post("/signup", body);
        this.setState({
          phoneNumber: "",
          address: "",
          email: "",
          password: "",
          dateOfBirth: "",
          questionOne: "",
          questionTwo: "",
          questionThree: "",
          answerOne: "",
          answerTwo: "",
          answerThree: ""
        });
        alert("User Successfully Create!");
        this.props.history.push("/login");
      } else {
        alert("User not created. Please fill out all fields and try again!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup">
          <input
            value={this.state.phoneNumber}
            onChange={this.handleInput}
            name="phoneNumber"
            placeholder="Phone Number"
            type="text"
            className="input"
          />
          <input
            value={this.state.address}
            onChange={this.handleInput}
            name="address"
            placeholder="Address"
            type="text"
            className="input"
          />
          <input
            value={this.state.email}
            onChange={this.handleInput}
            name="email"
            placeholder="Email"
            type="text"
            className="input"
          />
          <input
            value={this.state.password}
            onChange={this.handleInput}
            name="password"
            placeholder="Password"
            type="text"
            className="input"
          />
          <input
            value={this.state.dateOfBirth}
            onChange={this.handleInput}
            name="dateOfBirth"
            placeholder="Date of Birth"
            type="text"
            className="input"
          />
          <select>
            <option
              value={this.state.questionOne}
              name="questionOne"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your spouse's name?
            </option>
            <option
              value={this.state.questionTwo}
              name="questionTwo"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your name?
            </option>
            <option
              value={this.state.questionThree}
              name="questionThree"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your mom's name?
            </option>
          </select>
          <input
            value={this.state.answerOne}
            onChange={this.handleInput}
            placeholder="Answer"
            type="text"
            className="input"
            name="answerOne"
          />
          <select>
            <option
              value={this.state.questionOne}
              name="questionOne"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your spouse's name?
            </option>
            <option
              value={this.state.questionTwo}
              name="questionTwo"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your name?
            </option>
            <option
              value={this.state.questionThree}
              name="questionThree"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your mom's name?
            </option>
          </select>
          <input
            value={this.state.answerTwo}
            onChange={this.handleInput}
            placeholder="Answer"
            type="text"
            className="input"
            name="answerTwo"
          />
          <select>
            <option
              value={this.state.questionOne}
              name="questionOne"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your spouse's name?
            </option>
            <option
              value={this.state.questionTwo}
              name="questionTwo"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your name?
            </option>
            <option
              value={this.state.questionThree}
              name="questionThree"
              onClick={e => this.setState({ [e.target.name]: e.target.value })}
            >
              What is your mom's name?
            </option>
          </select>
          <input
            value={this.state.answerThree}
            onChange={this.handleInput}
            placeholder="Answer"
            type="text"
            className="input"
            name="answerThree"
          />
          <button onClick={this.handleSignUp}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Signup;
