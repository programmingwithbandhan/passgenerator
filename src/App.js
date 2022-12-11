import React from "react";

class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
    };
  }

  generatePassword = () => {
    // Generate a random password and set it to the "password" state property
    this.setState({
      password: Math.random().toString(36).slice(-8),
    });
  }

  render() {
    return (
      <div>
        <h1>Password Generator</h1>
        <button onClick={this.generatePassword}>Generate Password</button>
        <p>Your password: {this.state.password}</p>
      </div>
    );
  }
}
export default PasswordGenerator