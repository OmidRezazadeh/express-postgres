const { Router } = require("express");
const PostController = require("../controllers/PostController");
const Postrouter = new Router();
Postrouter.post("/store", PostController.store);

module.exports = Postrouter;