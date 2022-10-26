const router = require("express").Router();
const { signupController, loginController } = require("../controllers/authControllers")

router.post("/signup", (req, res) => signupController(req, res));

router.post("/login", (req, res) => loginController(req, res));

module.exports = router;
