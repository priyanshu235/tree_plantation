import SpotModel from "../models/spotModel.js";

export const getSpots = async (req, res) => {
    try {
        const spotModel = await SpotModel.find();
        res.status(200).json(spotModel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}