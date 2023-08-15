require("dotenv").config();
const express = require("express");

const Home = require("./controllers/Home");
const Login = require("./controllers/Login");
const app = express();


app.use('/', require('./routes/site'));
app.use('/post', require('./routes/post'));


// app.get("/", Home.index);
// app.get("/user", Home.show);
// app.post("/login", Login.store);

app.listen(process.env.PORT || 3000);
