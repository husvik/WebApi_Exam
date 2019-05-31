let menuDatabase = null;

function fillMenuDatabase() {
  menuDatabase = [
    {
      day: "Monday",
      dish: [
        {
          name: "Fish n Chips",
          price: 6
        },
        {
          name: "Pho Soup",
          price: 4
        }
      ]
    },
    {
      day: "Tuesday",
      dish: [
        {
          name: "Pasta Carbonara",
          price: 5
        },
        {
          name: "Fish soup",
          price: 4
        }
      ]
    },
    {
      day: "Wedensday",
      dish: [
        {
          name: "Pancakes",
          price: 4
        },
        {
          name: "Mexican Soup",
          price: 4
        }
      ]
    },
    {
      day: "Thursday",
      dish: [
        {
          name: "Pizza",
          price: 5
        },
        {
          name: "Mushroom Soup",
          price: 4
        }
      ]
    },
    {
      day: "Friday",
      dish: [
        {
          name: "Taco",
          price: 5
        },
        {
          name: "Tomato soup",
          price: 4
        }
      ]
    }
  ];
}

function getMenuDatabase() {
  if (menuDatabase === null) {
    fillMenuDatabase();
  }
  return menuDatabase;
}

//Using callback to send weekday index and dish index to any function that needs it.
function findDishFromDB(name, foundDishIndexCallback) {
  var weekDayIndex = 0;
  getMenuDatabase().forEach(weekDay => {
    var foundDishIndex = 0;
    weekDay.dish.forEach(dish => {
      if (name === dish.name) {
        foundDishIndexCallback(weekDayIndex, foundDishIndex);
        return;
      }
      foundDishIndex += 1;
    });
    weekDayIndex += 1;
  });
}

function deleteDish(name) {
  findDishFromDB(name, (weekIndex, dishIndex) => {
    getMenuDatabase()[weekIndex].dish.splice(dishIndex, 1);
  });
}

function editDish(name, price, newName) {
  findDishFromDB(name, (weekIndex, dishIndex) => {
    getMenuDatabase()[weekIndex].dish[dishIndex].name = newName;
    getMenuDatabase()[weekIndex].dish[dishIndex].price = price;
  });
}

function createDish(day, createdName, createdPrice) {
  getMenuDatabase().forEach(weekDay => {
    if (day === weekDay.day) {
      weekDay.dish.push({ name: createdName, price: createdPrice });
    }
  });
}

module.exports = { getMenuDatabase, deleteDish, editDish, createDish };
