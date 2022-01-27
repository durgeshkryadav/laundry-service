import React from 'react';
import Header from '../header/Header';
import Copyright from '../copyright/Copyright'; 
import Referal from '../referal/Referal';
import Footer from '../footer/Footer';
import './signin.css'
const Signin = () => {

  const login = async (elem) => {
    try {
        elem.preventDefault();
        const response = await fetch("http://localhost:5000/signin", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                userID: elem.target.userID.value,
                password: elem.target.password.value,
            }),
        });
        console.log(response)
        if (response.status === 200) {
            const body= await response.json()
            localStorage.setItem('token', body.token)
            localStorage.setItem('userName', body.userName)            
            alert("Login Successful")  
        }
        else {
            alert("Invalid credentials")
        }
    } catch (e) {
        console.log(e);
    }
};







  
  return (
    <>
    <Header/>
    <div className="mainbody">
      <div className="leftbody">
        <div className="company">
          <h1 className="title">Laundry Services</h1>
          <p className="subtitle">Doorstep Wash & Dry Clean Service</p>
          <p className="alternate">Don't have an account?</p>
          <button  onClick={alert}   className="register_btn_block">
            <p className="register_btn">Register</p>
          </button>
        </div>
      </div>
      <div className="rightbody">
        <div className="inside_right_body">
          <p className="signinheading">SIGNIN</p>
          <form className="inputform" onSubmit={login}>
              <input style={{ height:"40px",borderLeft:"0",borderRight:"0",borderTop:"0"}}type="text" placeholder='Email/Phone' />
              <br/>
              <input style={{ height:"40px",borderLeft:"0",borderRight:"0",borderTop:"0"}}    type="password" placeholder='password'/>
          <div className="forgot">
            <p>Forgot password?</p>
          </div>
          <input className='signin_btn' type="submit" value='Sign In' />
          </form>
        </div>
      </div>
    </div>
    <Referal/>
    <Footer/>
    <Copyright/>
    </>
  );
};

export default Signin;
