import mongoose  from "mongoose";



const userSchema = new mongoose.Schema( {
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  number: {
    type: String,

  },
  profilePic: {
    type: String,
    default : "", 
  },

},{timeseries : true})

const User = mongoose.model("User", userSchema)

export default User