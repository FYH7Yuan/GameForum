// config.js
const path = require("path");
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      _c: path.resolve(__dirname, "src/components")
    }
  }
};
