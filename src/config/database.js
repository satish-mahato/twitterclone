const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/twitter");
};

module.exports = connect;
