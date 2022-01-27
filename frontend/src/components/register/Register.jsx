import "./register.css";
import React from "react";
import Header from "../header/Header";
import Copyright from "../copyright/Copyright";
import Referal from "../referal/Referal";
import Footer from "../footer/Footer";
import { useState } from "react";
import res from "express/lib/response";
//import {useHistory} from 'react-router-dom'
const Register = () => {
//const history = useHistory()
const [user,setUser]=useState({
  name:"", email:"",phone:"",address:"",state:"",district:"",pincode:"",password:""
});
let name,value;
const handleInputs=(e)=>{
  console.log(e)
  name=e.target.name;
  value=e.target.value
  setUser({...user,[name]:value});
}

  const postData = async (elem) => {
    
      elem.preventDefault();
      const {name,email,phone,address,state,district,pincode,password}=user
       const res=await fetch("/signup", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,email,phone,address,state,district,pincode,password
        })
      });
      const data=await res.json();
      if(!data){
        window.alert("invalid details")
      }else{
        window.alert("successful")
        //history.push("/signin")
      }
     
  };

  return (
    <>
      <Header />
      <div className="body">
        <div className="container1">
          <div className="heading">
            <p>Laundry</p>
            <p>Services</p>
          </div>
          <div className="content">
            <p>Doorstep &</p>
            <p>Dryclean Service</p>
          </div>
          <div className="already">
            <p>Already Have Account</p>
          </div>

          <button className="signinb">
            <p className="signint">Sign In</p>
          </button>
        </div>

        <div className="container2">
          <div className="heading1">
            <p>
              <h1>REGISTER</h1>
            </p>
          </div>
          <div>
            <form method="POST"className="registerdata" >
              <div className="inputfield">
                <div className="inputfield1">
                  <input type="text" name="name" value={user.name} onChange={handleInputs} placeholder="Name" />
                  <input type="text" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone" />
                  <input type="text" name="district" value={user.district} onChange={handleInputs} placeholder="District" />
                  <input type="text" name="number" value={user.number} onChange={handleInputs} placeholder="Pincode" />
                </div>
                <div className="inputfield2">
                  <input type="text" name="email" value={user.email} onChange={handleInputs} placeholder="Email" />
                  <input type="text" name="state" value={user.state} onChange={handleInputs} placeholder="State" />
                  <input type="text" name="address" value={user.address} onChange={handleInputs} placeholder="Address" />
                  <input
                    type="password"
                    name="password" value={user.password} onChange={handleInputs}
                    placeholder="password"
                  />
                </div>
              </div>

              <div className="svgterms">
                <div>
                  <p>
                    I agree to Terms & Conditions receiving marketing and
                    promotional materials
                  </p>
                </div>
              </div>
              <div className="registerbutton">
                
                <button  onClick={postData}>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Referal />
      <Footer />
      <Copyright />
    </>
  );
};

export default Register;
