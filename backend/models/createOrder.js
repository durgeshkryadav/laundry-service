const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createOrderSchema = new Schema({
    user_id: {type: String},
    order_id: {type: String},
    order_details: [
        {
            product_type: {type: String},
            quantity: {type: Number, default: 0},
            wash: {type: Boolean, default: false},
            iron: {type: Boolean, default: false},
            fold: {type: Boolean, default: false},
            bleach: {type: Boolean, default: false},
            price: {type: Number, default:0}
        }
    ],
    total_quantity: {type: Number},
    total_price: {type: Number},
    order_status: {type: String, default: 'Ready to pick up', required: true},
    store_location: {type: String, default: 'JP Nagar'},
    state: {type:String},
    phonenum: {type: Number, default: "9876543211"}
},{ timestamps: true });

const createOrder = mongoose.model("createOrder", createOrderSchema);

module.exports = createOrder;



const mongoose = require("mongoose");
const Schema = mongoose.Schema;