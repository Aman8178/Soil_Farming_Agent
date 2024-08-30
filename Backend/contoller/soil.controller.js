import Soil from "../model/soil.model.js";

export const getSoil = async (req, res) => {
    try {
        const soil = await Soil.find();
        res.status(200).json(soil);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
