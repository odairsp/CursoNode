const express = require("express");
const Home = require("../controllers/Home");
const router = express.Router();

router.get("/", Home.index);
router.get("/show", Home.show);

module.exports = router;
