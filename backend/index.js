import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("api is working");
});

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("mongoDB database is connected");
  } catch (error) {
    console.log("mongoDB database connection failed");
  }
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1/users", userRoute);

app.listen(port, () => {
  connectDB();
  console.log("server is running" + port);
});
