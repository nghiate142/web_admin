var express = require("express");
var router = express.Router();
const {
  showCode,
  createCode,
  deleteCode,
} = require("../controller/code.controller");
const { loginAdmin } = require("../controller/loginAdmin.controller");
const { checkcookie, checkcookie1 } = require("../middleware/check_cookie");
/* GET home page. */

router.get("/login-admin", checkcookie, (req, res) => {
  res.render("login_simple");
});
router.post("/login-admin", loginAdmin);
// router.get("/list-code", (req, res, next) => {
//    showCode.find({}, (err, data) => {
//   res.render("list-code", {});
//   });
// });
// router.get("/list-code", checkcookie, showCode);
router.get("/add-code", createCode);
router.get("/delete-code/:id", deleteCode);

router.get("/dashboard", checkcookie, showCode);

module.exports = router;
