import mongoose from "mongoose";
mongoose.set("strictQuery", false);
export const connect = async () => {
  await mongoose.connect("mongodb://localhost:27017/twitter");
};
