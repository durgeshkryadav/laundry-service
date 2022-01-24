const express = require("express");
const { orderDisplay, userOrders, orderDisplay1 } = require("../controllers/OrderDisplayController");

const router = express.Router();

// Display all orders
router.route("/order/all").get(orderDisplay);


// display all order associated with specific user
// router.route("/order/me").get(userOrders); //if user is Authenticated(isAuthenticatedUser)


// Display all orders whose price is greater than 300
router.route("/order/orderwithprice").get(orderDisplay1);

module.exports = router;