const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 8080;

const MenuDatabase = require("./MenuDatabase");

app.use(bodyParser.json());
app.use("/", express.static("public"));

if (process.env.CORS) {
  app.use(cors());
}

let admin = { username: "admin", password: "admin" };

app.post("/adminCheck", (req, res) => {
  let credentials = req.body;
  let username = credentials.username;
  let password = credentials.password;
  if (username === admin.username && password === admin.password) {
    res.json({ isModerator: true });
  } else {
    res.json({ isModerator: false });
  }
});

app.get("/getMenu", (_, res) => {
  res.json({ menu: MenuDatabase.getMenuDatabase() });
});

app.post("/deleteDish", (req, res) => {
  let requestBody = req.body;
  let name = requestBody.name;

  MenuDatabase.deleteDish(name);
  res.json({ menu: MenuDatabase.getMenuDatabase() });
});

app.post("/editDish", (req, res) => {
  let requestBody = req.body;
  let name = requestBody.name;
  let price = requestBody.price;
  let newName = requestBody.newName;

  MenuDatabase.editDish(name, price, newName);
  res.json({});
});

app.post("/addDish", (req, res) => {
  let requestBody = req.body;

  MenuDatabase.createDish(requestBody.day, requestBody.name, requestBody.price);
  res.json({ menu: MenuDatabase.getMenuDatabase() });
});

server.listen(port, () => {
  console.log("Server started");
});
