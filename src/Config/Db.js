import mongoose from "mongoose";

export default function db() {

  if (mongoose.connection >= 1) {
    return
  }
  
  mongoose.connect("mongodb://127.0.0.1:27017/react");
}
