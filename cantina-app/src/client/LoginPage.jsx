import React from "react";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };

    this.nameChange = this.nameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  nameChange(event) {
    this.setState({ username: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  login() {
    fetch("/adminCheck", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(serverResponse => {
        return serverResponse.json();
      })
      .then(json => {
        if (json.isModerator) {
          this.props.history.push("/menu", {
            moderator: json.isModerator
          });
        } else {
          alert("Username or password is wrong!");
        }
      })
      .catch(error => {
        console.log("Login error: " + JSON.stringify(error));
      });
  }

  render() {
    return (
      <div>
        <h2>Chefs adm site</h2>
        <p>name:</p>
        <input
          placeholder=""
          value={this.state.username}
          onChange={this.nameChange}
        />
        <p>password:</p>
        <input
          placeholder=""
          value={this.state.password}
          onChange={this.passwordChange}
        />
        <div>
          <button onClick={() => this.login()}>Log in</button>
        </div>
      </div>
    );
  }
}
