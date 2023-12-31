const router = require("express").Router();

const Auth = require("../controllers/authController");
const checkToken = require("../middlewares/checkToken");

router.post("/register", Auth.register);
router.post("/login", Auth.login);
router.get("/checktoken", checkToken, Auth.checktoken);

module.exports = router;
