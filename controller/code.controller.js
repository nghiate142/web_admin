const codeModel = require("../model/code.model");
// const viewListCode = require("../views/listcode.ejs");

module.exports.showCode = async (req, res, next) => {
  try {
    const code = await codeModel.find({});
    res.render("dashboard", { codes: code });
  } catch (err) {
    console.log(err);
  }
};

module.exports.createCode = async (req, res, next) => {
  try {
    const crypto = require("crypto");
    function generateRandomString(length) {
      const charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let randomString = "";
      const randomBytes = crypto.randomBytes(length);
      for (let i = 0; i < randomBytes.length; i++) {
        let char = charset[randomBytes[i] % charset.length];
        randomString += char;
      }
      return randomString;
    }
    const randomString = generateRandomString(6);
    console.log(randomString);
    const code = await codeModel.create({ code: randomString });
    await code.save();
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

module.exports.deleteCode = async (req, res) => {
  try {
    await codeModel.findByIdAndDelete({ _id: req.params.id });
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
};
