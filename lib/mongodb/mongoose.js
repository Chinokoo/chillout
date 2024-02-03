import mongoose from "mongoose";

let isConnected = false; // track connection status.

const connectToDB = async () => {
  mongoose.set("strickQuery", true);

  if (isConnected) {
    console.log("MongoDB connection already established.");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Chillout",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};

export default connectToDB;
