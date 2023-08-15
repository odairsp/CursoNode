const index = function (request, response) {
  return response.send("<h1>Home@index</h1>");
};

const show = function (request, response) {
  return response.json("Home@show");
};

module.exports = { index, show }; 
 