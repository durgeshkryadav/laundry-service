const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createOrderSchema = Schema({
    user_id: {type: String},
    order_id: {type: String},
    order_details: [
        {
            product_type: {type: String},
            quantity: {type: Number},
            wash: {type: Boolean, default: false},
            iron: {type: Boolean, default: false},
            fold: {type: Boolean, default: false},
            bleach: {type: Boolean, default: false},
            price: {type: Number}
        }
    ],
    total_quantity: {type: Number},
    total_price: {type: Number},
    order_status: {type: String, default: 'Ready to pick up', required: true},
    address: {type: String}
},{ timestamps: true });

const createOrder = mongoose.model("createOrder", createOrderSchema);

module.exports = createOrder;