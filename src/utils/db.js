import mongoose from "mongoose";

const connect = async () => {
  const mongoURI = process.env.MONGO;
  if (!mongoURI) {
    throw new Error("MongoDB URI is not defined in environment variables!");
  }

  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Connection failed!", error);
    throw new Error("Connection failed!");
  }
};

export default connect;


