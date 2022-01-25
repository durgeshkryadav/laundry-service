const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser);
const Order = require("../models/createOrder");

const router = express.Router();

router.get('/orders', async (req, res)=>{
    try{
        const userOrder = Order.find({user_id: req.user});
        return res.json({
            status: 'success',
            data:{
                userOrder
            }
        });
    }
    catch(e){
        res.status(500).json({
            status: 'failed',
            message: e.message
        });
    };
});

// --    Post api for creating order -----------------------------------------------------------

router.post('/orders', async(req, res)=>{
    try{

        const { totalquantity, totalprice, orderdetails, orderstatus } = req.body;
        const Orders = await Items.create({
            totalquantity,
            totalprice,
            orderdetails,
            user: req.user,
        });
        res.json({
            status: 'Success'
        });
    }catch(e){
        res.status(500).json({
            status: "creation failed",
            message: e.message
        });
    }
});

// ------------------------------------------------------------------------------------------------

module.exports = router;