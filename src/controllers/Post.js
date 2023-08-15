const index = function (request, response) {
    return response.send("<h1>Post@index</h1>");
  };
  
  const show = function (request, response) {
    return response.json("Post@show");
  };
  
  module.exports = { index, show }; 
   