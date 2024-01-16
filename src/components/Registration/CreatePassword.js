import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Api_Url } from "../Data/ApiConfig";

export default function CreatePassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const ContactNo = location.state.Contact_no;
  const [Name, setName] = useState();
  const [NewPassword, setNewPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [ProfilePic, setProfilePic] = useState();
  const handleNPwChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleCPwChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleCreateUser = async () => {
    var data = new FormData();
    data.append("Contact_No", ContactNo);
    data.append("password", NewPassword);
    data.append("name", Name);
    data.append("profilePicture", ProfilePic);

    const resp = await axios.post(Api_Url + "signin/", data).then((res)=>{
      if(res.data.message==="User created successfully!"){
        alert("User Created");
      navigate("/login", {
        replace: true,
      });
      }
    }).catch((error)=>{
      alert(error)
    });
    // if (resp.data.message === "User created successfully!") {
    //   alert("User Created");
    //   navigate("/login", {
    //     replace: true,
    //   });
    // } else {
    //   alert("Something went wrong.");
    // }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleProfileImgChange = (e) => {
    setProfilePic(e.target.files[0]);
  };
  return (
    <div className="RegistrationFormContainer">
      <div className="RegistrationForm">
        <div className="RegistrationTitle">
          <i className="fa fa-plus" aria-hidden="true"></i> &nbsp;&nbsp; Create
          User
        </div>
        <div className="RegistrationFormInput">
          <label className="RegistrationFormLabel">Contact No.</label>
          <input
            className="RegistrationFormInputData"
            placeholder="Contact No"
            type="text"
            value={ContactNo}
            readOnly
          ></input>
        </div>
        <div className="RegistrationFormInput">
          <label className="RegistrationFormLabel">Name</label>
          <input
            className="RegistrationFormInputData"
            placeholder="Name"
            type="text"
            value={Name}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="RegistrationFormInput">
          <label className="RegistrationFormLabel">Create Password</label>
          <input
            className="RegistrationFormInputData"
            placeholder="Create Password"
            type="text"
            value={NewPassword}
            onChange={handleNPwChange}
          ></input>
        </div>
        <div className="RegistrationFormInput">
          <label className="RegistrationFormLabel">Confirm Password</label>
          <input
            className="RegistrationFormInputData"
            placeholder="Confirm Password"
            type="password"
            value={ConfirmPassword}
            onChange={handleCPwChange}
          ></input>
        </div>
        <div className="RegistrationFormInput">
          <label className="RegistrationFormLabel">Profile Photo</label>
          <input
            className="RegistrationFormInputData"
            placeholder="profile pic"
            type="file"
            onChange={handleProfileImgChange}
          ></input>
        </div>
        <div className="RegistrationButtonDiv">
          <button className="RegistrationButton" onClick={handleCreateUser}>
            <i className="fa fa-save" aria-hidden="true"></i> &nbsp;&nbsp;Create
            User
          </button>
        </div>
      </div>
    </div>
  );
}
