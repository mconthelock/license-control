const path = require("path");

module.exports = {
  entry: {
    app: "./assets/script/main.js", // ไฟล์เริ่มต้นของคุณ
    login: "./assets/script/login.js", // ไฟล์เริ่มต้นของคุณ
  },
  output: {
    filename: "[name].bundle.js", // ไฟล์ output ที่จะสร้าง
    path: path.resolve(__dirname, "assets/dist/js"),
  },
  mode: "development", // ใช้โหมด development หรือ production
  module: {
    rules: [
      {
        test: /\.css$/, // จัดการไฟล์ .css
        use: ["style-loader", "css-loader"], // ใช้ loaders ที่ติดตั้ง
      },
    ],
  },
};
