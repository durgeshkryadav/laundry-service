import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Summary from "./Summary";
import "./Displayfn.css"

// For route



const Displayfn = () => {
    const [order, setOrder] = useState([])

    const getOrders = async () => {
        try {
            const data = await axios("/api/v1/order/orderwithprice")
            console.log(data.data);
            setOrder(data.data)

        } catch (err) {

        }
    }
    useEffect(() => {
        getOrders()
    }, [])


    return <div >
        <table className='table'>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Order Date & Time</th>
                    <th>Store Location</th>
                    <th>City</th>
                    <th>Store Phone</th>
                    <th>Total Items</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th></th>
                    <th>View</th>

                </tr>
            </thead>
            <tbody>
                {order.map((i, index) =>
                    <tr>
                        <td>{i.order_id}</td>
                        <td>{i.order_date}</td>
                        <td>{i.store_location}</td>
                        <td>{i.city}</td>
                        <td>{i.store_phone}</td>
                        <td>{i.total_items}</td>
                        <td>{i.total_price} Rs</td>
                        <td>{i.status}</td>
                        <td><a href='!#'> <i>Cancel Order</i></a></td>
                        <td><a href='!#'> <i className="fa fa-eye"></i> </a> </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>

};

export default Displayfn;
