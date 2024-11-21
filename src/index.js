const express = require("express");
const connect = require("./config/database");
const HashtagRepository = require("./repository/hashtag-repository");

const app = express();

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");
  let repo = new HashtagRepository();
  const response = await repo.findByName(["Chair", "computer"]);
  console.log(response);
});
