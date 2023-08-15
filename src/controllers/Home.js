const index = function (request, response) {
  return response.json("Home@index");
};

const show = function (request, response) {
  return response.json("Home@show");
};

module.exports = { index, show };
