const Order = require("../models/demoModel");

// create product
exports.createDemoOrder = async (req, res, next) => {

    const demoOrder = await Order.create(req.body);

}
