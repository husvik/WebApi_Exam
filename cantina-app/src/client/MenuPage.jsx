import React from "react";

export class MenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      isModerator: this.props.location.state.moderator,
      newPrice: "",
      newName: "",
      newDay: "Monday"
    };
    this.newNameChanged = this.newNameChanged.bind(this);
    this.newPriceChanged = this.newPriceChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
    console.log("transfer object: " + JSON.stringify(this.props.location));
  }

  componentDidMount() {
    this.getMenu();
  }

  getMenu() {
    fetch("/getMenu")
      .then(serverResponse => {
        return serverResponse.json();
      })
      .then(json => {
        this.setState({ menu: json.menu });
      })
      .catch(error => {
        console.log("Error: " + JSON.stringify(error));
      });
  }

  deleteDish(incName) {
    console.log("Inc name: " + incName);
    let body = { name: incName };
    fetch("/deleteDish", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(serverResponse => {
        return serverResponse.json();
      })
      .then(json => {
        this.setState({ menu: json.menu });
      })
      .catch(error => {
        console.log("Error: " + JSON.stringify(error));
      });
  }

  goToEdit(dishName) {
    this.props.history.push("/edit", {
      name: dishName
    });
  }

  createDish(incDay, incName, incPrize) {
    console.log(
      "Creating new dish! incDay: " + incDay,
      "incName :" + incName,
      "incPrize : " + incPrize
    );
    let body = { name: incName, prize: incPrize };
  }

  setNewDay(day) {
    this.setState({ newDay: day });
  }

  newPriceChanged(event) {
    this.setState({ newPrice: event.target.value });
  }

  newNameChanged(event) {
    this.setState({ newName: event.target.value });
  }

  addNewDish() {
    fetch("/addDish", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.newName,
        price: this.state.newPrice,
        day: this.state.newDay
      })
    })
      .then(serverResponse => {
        return serverResponse.json();
      })
      .then(json => {
        this.getMenu();
      })
      .catch(error => {
        console.log("ERROR : " + JSON.stringify(error));
      });
  }

  handleChange(chosenDay) {
    this.setState({ newDay: chosenDay.target.value });
  }

  render() {
    return (
      <div>
        <h2>Menu</h2>
        <div hidden={!this.state.isModerator}>
          <p>Chefs adm mode on/Create dish:</p>
          <p>Select day:</p>
          <select onChange={this.handleChange}>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wedensday">Wedensday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
          <p>Write the name for the dish:</p>
          <input
            placeholder=""
            value={this.state.newName}
            onChange={this.newNameChanged}
          />
          <p>Write the price for the dish:</p>
          <input
            placeholder=""
            value={this.state.newPrice}
            onChange={this.newPriceChanged}
          />
          <button onClick={() => this.addNewDish()}>Create</button>
        </div>
        {this.state.menu.map(weekday => (
          <div>
            <h3>{weekday.day}</h3>

            {weekday.dish.map(dish => (
              <div>
                <p>{dish.name}</p>
                <p>{dish.price + "$"}</p>
                {/* todo: lage kommentarfelt */}
                <button
                  hidden={!this.state.isModerator}
                  onClick={() => this.goToEdit(dish.name)}
                >
                  Edit
                </button>
                <button
                  hidden={!this.state.isModerator}
                  onClick={() => this.deleteDish(dish.name)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
