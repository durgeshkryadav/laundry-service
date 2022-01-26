// Durgesh Schema Demo

// const mongoose = require("mongoose");

// const demoShema = new mongoose.Schema({
//     name: {
//         type: String
//     },
//     price: {
//         type: Number
//     },
//     user: {
//         type: mongoose.Types.ObjectId,
//         ref: "User"
//     },

//     createdDate: { type: Date, default: Date.now }
// })

// module.exports = mongoose.model("demoOrder", demoShema)













// Yash Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createOrderSchema = new Schema({
    user_id: { type: String },
    order_id: { type: String, default: "OR00001" },
    order_date: { type: Date, default: Date.now },
    store_location: { type: String, default: 'JP Nagar' },
    city: { type: String, default: "Bangalore" },
    store_phone: { type: Number, default: "+91 7054392173" },
    total_items: { type: Number },
    total_price: { type: Number },
    status: { type: String, default: 'Ready to pick up' },

    order_details: [
        {
            product_type: { type: String },
            quantity: { type: Number, default: 0 },
            wash: { type: Boolean, default: false },
            iron: { type: Boolean, default: false },
            fold: { type: Boolean, default: false },
            bleach: { type: Boolean, default: false },
            price: { type: Number, default: 0 }
        }
    ]

});

module.exports = mongoose.model("demoOrder", createOrderSchema);

