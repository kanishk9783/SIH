const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", schema);
module.exports = User;