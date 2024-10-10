const path = require("path");

module.exports = {
  entry: {
    apps: "./assets/script/apps.js",
    // index: "./assets/script/main.js",
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
