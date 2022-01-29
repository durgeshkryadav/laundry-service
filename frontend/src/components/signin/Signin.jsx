import React from "react";
import Header from "../header/Header";
import Copyright from "../copyright/Copyright";
import Referal from "../referal/Referal";
import Footer from "../footer/Footer";
import "./signin.css";
import { Link ,useNavigate} from "react-router-dom";
import { setToken } from "../localStorage/authOper"
const Signin = () => {
  const navigate = useNavigate();
  const login = async (elem) => {
    try{
    elem.preventDefault();
    const res=await fetch('/signin',{
      methos:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        string:elem.target.string.value,
        password:elem.target.password.value
      })
    })
    const {token}=await res.json();
    setToken(token)
  }catch(e){
    console.log(e);
    alert('failed')
  }
  navigate("https://cloud.mongodb.com/v2/61ed7f22f443e379d549dbb2#metrics/replicaSet/61ed7fcb75ab5f69011a7fe9/explorer/myFirstDatabase/users/find", { replace: true });
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
            <form method="POST" onSubmit={(elem)=>{login(elem)}}className="inputform">
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
              <input
                className="signin_btn"
                type="submit"
                value="Sign In"
              />
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
