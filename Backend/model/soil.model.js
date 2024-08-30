import mongoose from "mongoose";

const soilSchema = mongoose.Schema({
    name: String,
    link: String,
    category: String,
    image: String,
    title: String
});

const Soil = mongoose.model("Soil", soilSchema);

export default Soil;
