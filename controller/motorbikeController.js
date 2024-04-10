const upload = require("../config/upload");
const { Motorbike } = require("../model/model");

const motorbikeController = {
    //GET ALL
    getAllData: async (req, res) => {
        try {
            let listMotorbike = await Motorbike.find();
            res.status(200).json(listMotorbike)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    deleteData: async (req, res) => {
        try {
            let deleteData = await Motorbike.findByIdAndDelete(req.params.id);
            res.status(200).json(deleteData)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },
}
module.exports = motorbikeController;
