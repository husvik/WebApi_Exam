import React from "react";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };

    this.userNameChange = this.userNameChange.bind(this);
    this.userPasswordChange = this.userPasswordChange.bind(this);
  }

  userNameChange(event) {
    this.setState({ username: event.target.value });
  }

  userPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  enterWithoutModerator() {
    this.props.history.push("/menu", {
      moderator: false
    });
  }

  render() {
    return (
      <div>
        <h2>Chefs Dinner</h2>
        <h3>lovley dishes every week</h3>
        <p>To see this week meny, click on the "Menu" button bellow</p>
        <button onClick={() => this.enterWithoutModerator()}>Menu</button>
        <p>
          If you are the chef and want to edit the meny, click on the "Chef adm"
          button
        </p>
        <button onClick={() => this.props.history.push("/login")}>
          Chef adm
        </button>
      </div>
    );
  }
}
