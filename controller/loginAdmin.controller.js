const jwt = require("jsonwebtoken");

module.exports.loginAdmin = async (req, res, next) => {
  try {
    const timeCookie = 30 * 60 * 1000;
    const userName = process.env.USERADMIN;
    const password = process.env.PASSWORD;
    if (userName != req.body.username && password != req.body.password) {
      return res.status(400).json({ message: "not username or password" });
    }
    const token = jwt.sign({ username: userName }, process.env.JWT);
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: timeCookie,
      })
      .redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};
