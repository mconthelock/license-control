const path = require("path");

module.exports = {
  entry: {
    apps: "./assets/script/app.js",
    master: "./assets/script/master/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets/dist/js"),
  },
  mode: "production", // ใช้โหมด development หรือ production
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
