const { create } = require("express-handlebars");
const { PARTIALS_DIR, LAYOUTS_DIR, VIEWS_DIR } = require("./constants");

const engine = create({ partialsDir: PARTIALS_DIR, layoutsDir: LAYOUTS_DIR });

exports.init = function (app) {
  app.engine("html", engine.engine);

  app.set("view engine", "html");
  app.set("views", VIEWS_DIR);
};
