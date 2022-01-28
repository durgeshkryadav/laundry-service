import React from "react";
import "./Aside.css";
import home from "../img/home-run (1).svg";
import plus from "../img/more.svg";
import list from "../img/list.svg";



const Aside = () => {
    return <body>
        <div className="wrapper">
            <div className="ui--sidebar"></div>
            <img src={home} className="home--icon" alt="" />
            <img src={plus} className="more--icon" alt="" />
            <div className="list--icon">
                <img src={list} alt="" />
            </div>
        </div>
    </body>
};

export default Aside;
