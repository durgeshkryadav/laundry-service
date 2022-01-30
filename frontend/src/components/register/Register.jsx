import "./register.css";
import React from "react";
import Header from "../header/Header";
import Copyright from "../copyright/Copyright";
import Referal from "../referal/Referal";
import Footer from "../footer/Footer";
import { Link ,useNavigate} from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  
  const postData = async (elem) => {

    try{
      elem.preventDefault();
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify({
        name: elem.target.name.value,
        email: elem.target.email.value,
        phone: elem.target.phone.value,
        state: elem.target.state.value,
        district: elem.target.district.value,
        address: elem.target.address.value,
        pincode: elem.target.pincode.value,
        password: elem.target.password.value
      })
    });
    if (res.status === 200) {
      console.log("user added successfully")
    }
     
   }catch(e){
     alert(e)
   } 
   navigate("/", { replace: true });
    
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
          <Link to="/">
            <button className="signinb">
              <p className="signint">Sign In</p>
            </button>
          </Link>
        </div>

        <div className="container2">
          <div className="heading1">
            <p>
              <h1>REGISTER</h1>
            </p>
          </div>
          <div>
            <form  onSubmit={(elem)=>{postData(elem)}} className="registerdata">
              <div className="inputfield">
                <div className="inputfield1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />
                  <input
                    type="text"
                    name="district"
                    placeholder="District"
                  />
                  <input
                    type="text"
                    name="number"
                    placeholder="Pincode"
                  />
                </div>
                <div className="inputfield2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                  />
                  <input
                    type="password"
                    name="password"
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
                <button type="submit">Register</button>
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
