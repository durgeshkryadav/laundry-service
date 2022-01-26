import React, { Component } from 'react';

class DisplayAsTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userOrders: [],
            isLoading: true,
            isError: false
        }
    }

    //async function to get Order Detail request
    async componentDidMount() {
        this.setState({ isLoading: true })
        const response = await fetch("/api/v1/order/orderwithprice")

        if (response.ok) {
            const userOrders = await response.json()
            console.log(userOrders);

            this.setState({ userOrders, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }

    }



    // Define function to render details in table renderTableHeader and renderTableRow
    // renderTableHeader = () => {
    //     return .map(attribute =>
    //         <th></th>)


    // "proxy": "http://localhost:4000",

    // }

    // renderTableRow = () => {
    //     return this.state.userOrders.map(userOrder => {
    //         return (
    //             <tr key={userOrder._id}>
    //                 <td>{userOrder.name}</td>
    //                 <td>{userOrder.price}</td>
    //             </tr>
    //         )
    //     })
    // }

    render() {
        const { userOrders } = this.state

        return (<div className='parent'>
            (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {userOrders.map((order, index) => {
                        <tr>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            )
        </div>
        )

    }
}



export default DisplayAsTable