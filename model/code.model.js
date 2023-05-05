const mongoose = require("mongoose");
const code = new mongoose.Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    machine_code: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("codes", code);
