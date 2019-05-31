import React from "react";

export class EditDishPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentName: this.props.location.state.name,
      price: "",
      name: this.props.location.state.name
    };
    this.nameChanged = this.nameChanged.bind(this);
    this.priceChanged = this.priceChanged.bind(this);
  }

  nameChanged(event) {
    this.setState({ name: event.target.value });
  }

  priceChanged(event) {
    this.setState({ price: event.target.value });
  }

  updateDish() {
    fetch("/editDish", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.currentName,
        price: this.state.price,
        newName: this.state.name
      })
    })
      .then(serverResponse => {
        return serverResponse.json();
      })
      .then(json => {
        this.props.history.goBack();
      })
      .catch(err => {
        console.log("Error occured: " + JSON.stringify(err));
      });
  }

  render() {
    return (
      <div>
        <h3>Edit dish page</h3>
        <p>new name:</p>
        <input
          placeholder=""
          value={this.state.name}
          onChange={this.nameChanged}
        />
        <p>new price:</p>
        <input
          placeholder=""
          value={this.state.price}
          onChange={this.priceChanged}
        />
        <button onClick={() => this.updateDish()}>Submit</button>
      </div>
    );
  }
}
