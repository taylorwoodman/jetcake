import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = async () => {
    try {
      const body = {
        password: this.state.password,
        email: this.state.email
      };

      if (body.email && body.password) {
        await axios.post("/api/login", body).then(response => {
          this.props.updateUser(response.data);
          console.log(response.data);

          this.props.history.push("/profile");
        });
      } else {
        alert("Login incorrect");
        this.props.history.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="login-container">
        <div className="login">
          <input
            className="input"
            placeholder="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="input"
            placeholder="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button onClick={this.handleLogin}>Sign In</button>
        </div>
      </div>
    );
  }
}

export default Login;
