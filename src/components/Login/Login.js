import React, { useState } from "react";
import axios from "axios";
import { Api_Url } from "../Data/ApiConfig";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [Contact, setContact] = useState();
  const [Password, setPassword] = useState();
  const handleContactChange = (e) => {
    setContact(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    var data = { Contact_No: "+91" + Contact, password: Password };
    const resp = await axios.post(Api_Url + "login/", data).then((res)=>{
      if(res.data.message==="Login Successfull"){
      sessionStorage.setItem("access_token", res.data.token);
      sessionStorage.setItem("unique_id", res.data.id);
      sessionStorage.setItem("contact_number", "+91" + Contact);
      navigate("/dashboard/");
      }
    }).catch((error) => {
      alert(error.message);
    });
    // if (resp.data.message === "Login Successfull") {
    //   await sessionStorage.setItem("access_token", resp.data.token);
    //   await sessionStorage.setItem("unique_id", resp.data.id);
    //   await sessionStorage.setItem("contact_number", "+91" + Contact);
    //   navigate("/dashboard/");
    // } else {
    //   alert("Contact No or Password is incorrect.");
    // }
  };
  return (
    <div className="LoginContainer">
      <div className="LoginForm">
        <div className="LoginTitle">
          <i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;&nbsp; Log
          In
        </div>
        <div className="LoginFormInput">
          <label className="LoginFormLabel">Contact No.</label>
          <input
            className="LoginFormInputData"
            placeholder="Contact No"
            type="text"
            value={Contact}
            onChange={handleContactChange}
          ></input>
        </div>
        <div className="LoginFormInput">
          <label className="LoginFormLabel">Password</label>
          <input
            className="LoginFormInputData"
            placeholder="Password"
            type="password"
            value={Password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div className="LoginButtonDiv">
          <button className="LoginButton" onClick={handleLogin}>
            <i className="fa fa-sign-in" aria-hidden="true"></i>{" "}
            &nbsp;&nbsp;Login
          </button>
        </div>
      </div>
    </div>
  );
}
