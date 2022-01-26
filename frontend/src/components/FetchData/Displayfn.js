import React, { useEffect, useState } from 'react';
import axios from "axios";

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

    return <div>
        <h1>Hii Its Ok</h1>
        {order.map((i) => {
            return <p>{i.name}</p>
        })}
    </div>;
};

export default Displayfn;
