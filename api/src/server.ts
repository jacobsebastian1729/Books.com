// connect database here
import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();
const port = 8001;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.log(
      "MongoDB connection error. Please make sure that MDB is running." + error
    );
    process.exit(1);
  });
