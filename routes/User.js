const {Router}= require("express");
const UserController = require("../controllers/UserController");
const router =new Router();
router.post("/store", UserController.store);
module.exports = router;