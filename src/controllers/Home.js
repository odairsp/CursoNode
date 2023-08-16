const { MAIN_DIR } = require("../helpers/constants");

const index = function (request, response) {
  return response.render("home", { layout: MAIN_DIR, title: "Home@index" });
};

const show = function (request, response) {
  return response.render("home", { layout: MAIN_DIR, title: "Home@show" });
};

module.exports = { index, show };
