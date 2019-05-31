//entry point -> output
const path = require("path");

module.exports = {
  entry: "./src/client/app.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      ["~"]: path.resolve(__dirname + "/src")
    }
  }
};
