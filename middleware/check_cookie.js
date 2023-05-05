// module.exports.checkcookie = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (token) {
//     next();
//   } else {
//     return res.redirect("/login-admin");
//   }
// };

// module.exports.checkcookie1 = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (token) {
//     res.redirect("/dashboard");
//   } else {
//     next();
//   }
// };
module.exports.checkcookie = (req, res, next) => {
  const token = req.cookies.access_token;
  if (token) {
    if (req.url === "/dashboard") {
      next();
    } else {
      res.redirect("/dashboard");
    }
    return false;
  } else {
    if (req.url === "/login-admin") {
      next();
    } else {
      res.redirect("/login-admin");
    }
  }
};
