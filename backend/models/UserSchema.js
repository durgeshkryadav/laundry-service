const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true  },
  email: { type: String, unique: true, required: true },
  phone: { type: Number, unique: true,required: true },
  address: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: Number, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
