import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Api_Url } from "../Data/ApiConfig";
import "./Registration.css"

export default function Registration() {
    const navigate = useNavigate();
  const [number, setNumber] = useState();
  const [OTP, setOTP] = useState();
  const [OTPS, setOTPS] = useState();

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleGetOTP = async () => {
    var num = "+91" + number;
    var data = { contact_no: num };

    const resp = await axios.post(Api_Url + "send_sms/", data);
    console.log(resp);
    setOTPS(resp.data.otp);
    alert("OTP Sent.");
    document.getElementById("OTP").style.display="flex";
    document.getElementById("OTPBtn").style.display="flex";
    document.getElementById("MobileAuthentication").style.display="none";
    document.getElementById("MobileAuthenticationBtn").style.display="none";
  };

  const handleVerifyOTP = () => {
    if (OTP === OTPS) {
      navigate("/createuser", {
        replace: true,
        state: { Contact_no: "+91" + number },
      });
    } else {
      alert("OTP not correct.");
    }
  };
  return (
    <div className='RegistrationFormContainer'>
        <div className="RegistrationForm">
        <div className="RegistrationTitle">
          <i className="fa fa-sign-in" aria-hidden="true"></i> &nbsp;&nbsp; Registration
        </div>
        <div className="RegistrationFormInput" id="MobileAuthentication">
          <label className="RegistrationFormLabel">Contact No.</label>
          <input
            className="RegistrationFormInputData"
            placeholder="Contact No"
            type="text"
            value={number}
            onChange={handleNumberChange}
          ></input>
        </div>
        <div className="RegistrationButtonDiv" id="MobileAuthenticationBtn">
          <button className="RegistrationButton" onClick={handleGetOTP}>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
            &nbsp;&nbsp;Get OTP
          </button>
        </div>
        <div className="RegistrationFormInput" id="OTP">
          <label className="RegistrationFormLabel">OTP</label>
          <input
            className="RegistrationFormInputData"
            placeholder="OTP"
            type="text"
            value={OTP}
              onChange={handleOTPChange}
          ></input>
        </div>
        <div className="RegistrationButtonDiv" id="OTPBtn">
          <button className="RegistrationButton" onClick={handleVerifyOTP}>
            <i className="fa fa-check" aria-hidden="true"></i>{" "}
            &nbsp;&nbsp;Verify OTP
          </button>
        </div>
      </div>
    </div>
  )
}
