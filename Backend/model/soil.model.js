import mongoose from "mongoose";

const soilSchema=mongoose.Schema({
    name:String,
    link:String,
    category:String,
    image:String,
    title:String
})

const Soil=mongoose.model("soil", soilSchema);

export default Soil;