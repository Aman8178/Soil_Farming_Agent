import express from "express";
import dotenv from  "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import soilRoute from "./route/soil.route.js"
import userRoute from "./route/user.route.js"
const app = express()

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;

//connect to mogoDB

const URI=process.env.MongoDBURI;

try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connected to mongo db")
}catch(error){
    console.log("Error", error);
}
//defining routes
app.use("/soil", soilRoute)
app.use("/user", userRoute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})