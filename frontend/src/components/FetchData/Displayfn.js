import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import "./Displayfn.css"


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

    // return <div>
    //     <h1>Hii Its Ok</h1>
    //     {order.map((i) => {
    //         return <p>{i.name}</p>
    //     })}
    // </div>;





    return <div>
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
                        <td></td>
                        <td><i class="fa fa-eye"></i></td>

                    </tr>
                )}
            </tbody>
        </table>
    </div>






};

export default Displayfn;
