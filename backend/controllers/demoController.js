const Order = require("../models/demoModel");

// create product
exports.createProduct = async (req, res, next) => {

    const order = await Order.create(req.body);

    res.status(201).json({
        succes: true,
        order
    })
}
