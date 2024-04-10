const upload = require("../config/upload");
const motorbikeController = require("../controller/motorbikeController");
const { Motorbike } = require("../model/model");

const router = require("express").Router();

router.get('/', motorbikeController.getAllData);

router.post('/uploadImage', upload.single('image_ph32353'), async (req, res) => {
    try {
        const data = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'Không nhận được file' })
        }
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;

        const newMotorbike = new Motorbike({
            name_ph32353: data.name_ph32353,
            price_ph32353: data.price_ph32353,
            describe_ph32353: data.describe_ph32353,
            color_ph32353: data.color_ph32353,
            image_ph32353: imageUrl
        })

        const saveData = await newMotorbike.save();
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id',motorbikeController.deleteData);  


router.put('/uploadImage/:id', upload.single('image_ph32353'), async (req, res) => {
    try {
        const data = req.body;
        const file = req.file;

        const motorbikeOld = await Motorbike.findById(req.params.id);

        if (!file) {
            return res.status(400).json({ error: 'Không nhận được file' })
        }
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;

        motorbikeOld.name_ph32353 = data.name_ph32353;
        motorbikeOld.price_ph32353 = data.price_ph32353;
        motorbikeOld.describe_ph32353 = data.describe_ph32353;
        motorbikeOld.color_ph32353 = data.color_ph32353;
        motorbikeOld.image_ph32353 = imageUrl;

        const saveData = await motorbikeOld.save();
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = router;
