import React from 'react';
import "./Header.css";
import img1 from "../img/sindre-aalberg-a671PFo5DYE-unsplash.jpg"

const Header = () => {
    return <div>

        <div className='parent'>
            <div className='parent-part1-main'>
                <div className='parent-part1'>
                    <p >LAUNDRY</p>
                </div>

                <div className='parent-part1'>
                    <p >Pricing</p>
                </div>

                <div className='parent-part1'>
                    <p >Career</p>
                </div>
                <div className='parent-part1' id='id1'>
                    <img src={img1}></img>
                    <p>User Name</p>
                </div>


            </div>
        </div>


    </div>;
};

export default Header;
