const mongoose = require("mongoose");

const demoShema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    createdDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model("demoOrder", demoShema)