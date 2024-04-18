const { Router } = require("express");
const PostController = require("../controllers/PostController");
const Postrouter = new Router();
Postrouter.post("/store", PostController.store);
Postrouter.delete("/delete", PostController.delete);
module.exports = Postrouter;