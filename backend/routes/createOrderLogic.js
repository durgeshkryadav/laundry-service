const express = require('express');
const mongoose = require('mongoose');
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
        res.json({status: 'failed',
        message: e.message
        });
    };
});

// --    Post api for creating order -----------------------------------------------------------

router.post('/orders', async(req, res)=>{
    const order_data = req.body.order_details;
    let order_price = 0;
    let order_quantity = 0;
    order_data.forEach((detail)=>{
        let tot = 0
        if(detail.wash){
            tot += detail.quantity * 20
        }
        if(detail.iron){
            tot += detail.quantity * 15
        }
        if(detail.fold){
            tot += detail.quantity * 10
        }
        if(detail.bleech){
            tot += detail.quantity * 25
        }
        detail['order_price'] = tot,
        order_price += tot,
        order_quantity += parseInt(detail.quantity)
    });
    const {address, order_status} = req.body;
    const order = await Order.create({
        order_id: 'ORD0001',
        order_details: order_data,
        total_quantity: order_quantity,
        total_price: order_price,
        order_status,
        address
    });
    res.json({
        status: 'Success'
    });
});

// ------------------------------------------------------------------------------------------------

module.exports = router;