const path = require("path");

module.exports = {
  entry: {
    apps: "./assets/script/app.js",
    masters: "./assets/script/master/index.js",
    licenses: "./assets/script/license/index.js",
    newlicenses: "./assets/script/license/add.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets/dist/js"),
  },
  mode: "development", // ใช้โหมด development หรือ production
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
