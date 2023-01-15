import mongoose from 'mongoose';

const spotSchema = mongoose.Schema({
    title: String
});

const SpotModel = mongoose.model("SpotModel", spotSchema);

export default SpotModel;