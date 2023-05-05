const crypto = require("crypto");

function generateRandomString(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  // tạo buffer chứa các bytes ngẫu nhiên
  const randomBytes = crypto.randomBytes(length);

  // lọc bỏ các bytes không phù hợp với charset
  for (let i = 0; i < randomBytes.length; i++) {
    let char = charset[randomBytes[i] % charset.length];
    randomString += char;
  }

  return console.log(randomString);
}

// sử dụng hàm để tạo chuỗi ngẫu nhiên 6 ký tự
const randomString = generateRandomString(6);
console.log(randomString);
