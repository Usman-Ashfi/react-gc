import mongoose, { Mongoose } from "mongoose";

// const UserSchema = new mongoose.Schema({
//   fullname: {
//     type: String,
//     trim: true,
//     required: [true, "Enter Fullname Name"],
//   },
// });

// export default mongoose.models?.users || mongoose.model("users", UserSchema);

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: Number,
  },
});

export default mongoose.models.user || mongoose.model("user", UserSchema);
