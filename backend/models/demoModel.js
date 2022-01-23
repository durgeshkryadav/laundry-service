const mongoose = require("mongoose");

const demoShema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    createdDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model("demoOrder", demoShema)