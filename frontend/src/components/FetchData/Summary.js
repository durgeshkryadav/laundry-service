import React from 'react';
import "./Summary.css"

const summary = () => {
    return <div>

        {/* main */}
        <div className='main'>
            <header className='header'>
                <h1>Summary</h1>
            </header>


            <nav className='navbar'>
                <div className='part1'>
                    <label>Store Location</label>
                    <p>Jp Nagar</p>
                </div>

                <div className='part1'>
                    <label>Store Address:</label>
                    <p>near Phone booth, 10th road</p>
                </div>

                <div className='part1'>
                    <label>Phone</label>
                    <p>7054392173</p>
                </div>
            </nav>



            <div className='navbar2'>
                <div className='part2'>
                    <span class="dot"></span>
                    <p>Picked Up</p>
                </div>

                <div className='part2'>
                    <span class="dot"></span>
                    <p>Washed</p>
                </div>

                <div className='part2'>
                    <span class="dot"></span>
                    <p>Ironed</p>
                </div>

                <div className='part2'>
                    <span class="dot"></span>
                    <p>Delivered</p>
                </div>
            </div>


            {/* body */}
            <div className='body-container'>

                <span>Order Detais</span>
                <div>

                </div>

            </div>

            <hr></hr>
            {/* address */}
            <div className='address'>
                <span>Address</span>
                <div className='part3'>
                    <strong>Home</strong>
                    <label>#223, 10th road, Jp Nagar, Banglore</label>
                </div>
            </div>



            {/* footer */}
            <footer className='footer'>
                <div className='part4'>
                    <p>Cancel Order</p>
                </div>
            </footer>

        </div>

    </div>;
};

export default summary;
