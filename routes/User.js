const {Router}= require("express");
const UserController = require("../controllers/UserController");
const router =new Router();
router.post("/store", UserController.store);
router.get("/list/:id?", UserController.list);
router.delete("/delete/:id", UserController.delete);
router.put("/edit/:id", UserController.edit);
module.exports = router;