const mongoose = require('mongoose');

const MotorbikeSchema = {
    name_ph32353: {
        type: String,
        require: true
    },
    price_ph32353: {
        type: Number,
        require: true
    },
    describe_ph32353: {
        type: String,
        require: true
    },
    color_ph32353: {
        type: String,
        require: true
    },
    image_ph32353: {
        type: String,
        require: true
    }
}

const Motorbike = mongoose.model('Motorbike', MotorbikeSchema);

module.exports = {
    Motorbike
};
