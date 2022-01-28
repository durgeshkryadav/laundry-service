import React from 'react';
import img2 from "../img/search.svg"
import "./TopBody.css";

const TopBody = () => {
    return <div className='main'>
        <div className='container'>
            <div className='right1'>
                <h2>Orders | 0 </h2>
            </div>
            <div className='right1'>
                <button>Create</button>
            </div>

            <div className='right1'>
                <img src={img2}></img>
                <div className='right12'>
                </div>

            </div>

        </div>
    </div>;
};

export default TopBody;
