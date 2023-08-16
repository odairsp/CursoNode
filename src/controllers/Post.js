const { MAIN_DIR } = require("../helpers/constants");

const index = function (request, response) {
  return response.render("home", { layout: MAIN_DIR, title: "Post@index" });
};

const show = function (request, response) {
  return response.render("home", { layout: MAIN_DIR, title: "Post@show" });
};

module.exports = { index, show };
