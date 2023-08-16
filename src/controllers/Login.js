const { MAIN_DIR } = require("../helpers/constants");

const index = function (request, response) {
  return response.render("login", { layout: MAIN_DIR, title: "Login@index" });
};

module.exports = { index };
