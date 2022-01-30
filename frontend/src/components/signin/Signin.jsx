import React from "react";
import Header from "../header/Header";
import Copyright from "../copyright/Copyright";
import Referal from "../referal/Referal";
import Footer from "../footer/Footer";
import "./signin.css";
import { Link } from "react-router-dom";
import { setToken } from "../localStorage/authOper"
const Signin = () => {
  // const navigate = useNavigate();
  const login = async (elem) => {
    try{
    elem.preventDefault();
    const res=await fetch('http://localhost:5000/signin',{
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body:JSON.stringify({
        string:elem.target.string.value,
        password:elem.target.password.value
      })
    })
    const {token}=await res.json();
    setToken(token)
    alert("successful")
  }catch(e){
    console.log(e);
    alert('failed')
  }
  // navigate("/order", { replace: true });
};

  return (
    <>
      <Header />
      <div className="mainbody">
        <div className="leftbody">
          <div className="company">
            <h1 className="title">Laundry Services</h1>
            <p className="subtitle">Doorstep Wash & Dry Clean Service</p>
            <p className="alternate">Don't have an account?</p>
            <Link to="/signup">
              <button className="register_btn_block">
                <p className="register_btn">Register</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="rightbody">
          <div className="inside_right_body">
            <p className="signinheading">SIGNIN</p>
            <form method="POST" onSubmit={(elem)=>{login(elem)}} className="inputform">
              <input
                style={{
                  height: "40px",
                  borderLeft: "0",
                  borderRight: "0",
                  borderTop: "0",
                }}
                type="text"
                name="email"
                placeholder="Email/Phone"
              />
              <br />
              <input
                style={{
                  height: "40px",
                  borderLeft: "0",
                  borderRight: "0",
                  borderTop: "0",
                }}
                name="password"
                type="password"
                placeholder="password"
              />
              <div className="forgot">
                <p>Forgot password?</p>
              </div>
              <button
                className="signin_btn"
                type="submit"
              >Sign In</button>
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

export default Signin;
