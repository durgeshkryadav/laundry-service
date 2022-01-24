const Order = require("../models/demoModel");



// Display All order
exports.orderDisplay = async (req, res, next) => {

    const allOrders = await Order.find();

    res.status(201).json({
        succes: true,
        allOrders
    })
}




// Display logged in user Orders
// exports.userOrders = (req, res) => {
//     const orders = await Order.find({ user: req.user._id });

//     res.status(200).json({
//         succes: true,
//         orders
//     })
// }




// Display Order whose price is greater than 300
exports.orderDisplay1 = async (req, res, next) => {

    const userOrders = await Order.find({ "price": { $gt: 10000 } });

    res.status(201).json({
        succes: true,
        userOrders
    })
}