import mongoose from "mongoose";

const ConnnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connected Failed");
  }
};

export default ConnnectDB;
