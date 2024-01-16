import React, { useEffect, useState } from "react";
import axios from "axios";
import { Api_Url } from "../Data/ApiConfig";
import "./Sidebar.css";

export default function SideBar() {
  const [Data, setData] = useState();
  const contact_no = sessionStorage.getItem("contact_number");
  const id = sessionStorage.getItem("unique_id");
  const token = sessionStorage.getItem("access_token");
  const [ExamMode, setExamMode] = useState();
  useEffect(() => {
    axios
      .get(Api_Url + "user/" + contact_no)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  const HandleClick1 = () => {
    document.getElementById("registrationForm").style.display = "flex";
    document.getElementById("admitCard").style.display = "none";
    document.getElementById("samplePaper").style.display = "none";
    document.getElementById("attemptExam").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("certificate").style.display = "none";
    document.getElementById("resetPassword").style.display = "none";
  };
  const HandleClick2 = () => {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("admitCard").style.display = "flex";
    document.getElementById("samplePaper").style.display = "none";
    document.getElementById("attemptExam").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("certificate").style.display = "none";
    document.getElementById("resetPassword").style.display = "none";

  };
  const HandleClick3 = () => {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("admitCard").style.display = "none";
    document.getElementById("samplePaper").style.display = "flex";
    document.getElementById("attemptExam").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("certificate").style.display = "none";
    document.getElementById("resetPassword").style.display = "none";
  };
  const HandleClick4 = () => {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("admitCard").style.display = "none";
    document.getElementById("samplePaper").style.display = "none";
    document.getElementById("attemptExam").style.display = "flex";
    document.getElementById("result").style.display = "none";
    document.getElementById("certificate").style.display = "none";
    document.getElementById("resetPassword").style.display = "none";
  };
  const HandleClick5 = () => {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("admitCard").style.display = "none";
    document.getElementById("samplePaper").style.display = "none";
    document.getElementById("attemptExam").style.display = "none";
    document.getElementById("result").style.display = "flex";
    document.getElementById("certificate").style.display = "none";
    document.getElementById("resetPassword").style.display = "none";
  };
  const HandleClick6 = () => {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("admitCard").style.display = "none";
    document.getElementById("samplePaper").style.display = "none";
    document.getElementById("attemptExam").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("certificate").style.display = "flex";
    document.getElementById("resetPassword").style.display = "none";
  };
  const HandleClick7 = () => {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("admitCard").style.display = "none";
    document.getElementById("samplePaper").style.display = "none";
    document.getElementById("attemptExam").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("certificate").style.display = "none";
    document.getElementById("resetPassword").style.display = "flex";
  };
  const handleNavOpen=()=>{
    document.getElementById('SideBar').style.width="90%";
    document.getElementById('SideBarUserInfo').style.display="flex";
    var objects=document.getElementsByClassName('SideNavOption')
    for(var i=0;i<objects.length;i++){
      objects[i].style.display="flex";
    }
    var objects=document.getElementsByClassName('SideNavIcon')
    for(var i=0;i<objects.length;i++){
      objects[i].style.width="20%";
    }
    document.getElementById("SideNavMobileOpen").style.display="none"
    document.getElementById("SideNavMobileClose").style.display="flex"

  }
  const handleNavClose=()=>{
    document.getElementById('SideBar').style.width="15%";
    document.getElementById('SideBarUserInfo').style.display="none";
    var objects=document.getElementsByClassName('SideNavOption')
    for(var i=0;i<objects.length;i++){
      objects[i].style.display="none";
    }
    var objects=document.getElementsByClassName('SideNavIcon')
    for(var i=0;i<objects.length;i++){
      objects[i].style.width="100%";
    }
    document.getElementById("SideNavMobileOpen").style.display="flex"
    document.getElementById("SideNavMobileClose").style.display="none"
  }
  if(!Data)return null;
  return (
    <div className="SideBar" id="SideBar">
      <div className="SideBarUserInfo" id="SideBarUserInfo">
        <div className="SidebarImageContainer">
          <img
            className="SidebarImage"
            src={require("../Img/Shiwam_Dwivedi (2).jpg")}
            alt="profile pic"
          />
        </div>
        <div className="SidebarUserInfoContainer">
          <p className="SideBarData">{Data.name?Data.name:null}</p>
          <p className="SideBarData">{Data.uniqueID?Data.uniqueID:null}</p>
        </div>
      </div>
      <div className="SideBarNav" >
        <div id="SideNavMobileClose" className="SidebarNavOption" onClick={handleNavClose}>
          <i className="fa fa-bars SideNavIcon" aria-hidden="true"></i>
          <p className="SideNavOption">Close Side Bar</p>
        </div>
        <div id="SideNavMobileOpen" className="SidebarNavOption" onClick={handleNavOpen}>
          <i className="fa fa-bars SideNavIcon" aria-hidden="true"></i>
        </div>
        <div className="SidebarNavOption" onClick={HandleClick1}>
          <i
            className="fa fa-check-square-o SideNavIcon"
            aria-hidden="true"
          ></i>
          <p className="SideNavOption">Complete Registration</p>
        </div>
        <div className="SidebarNavOption" onClick={HandleClick2}>
          <i className="fa fa-id-card-o SideNavIcon" aria-hidden="true"></i>
          <p className="SideNavOption">Admit Card</p>
        </div>
        <div className="SidebarNavOption" onClick={HandleClick3}>
          <i className="fa fa-file-o SideNavIcon" aria-hidden="true"></i>
          <p className="SideNavOption">Sample Paper</p>
        </div>
        <div className="SidebarNavOption" onClick={HandleClick4}>
          <i className="fa fa-file-text-o SideNavIcon" aria-hidden="true"></i>
          <p className="SideNavOption">Attempt Exam</p>
        </div>
        <div className="SidebarNavOption" onClick={HandleClick5}>
          <i
            className="fa fa-graduation-cap SideNavIcon"
            aria-hidden="true"
          ></i>
          <p className="SideNavOption">Result</p>
        </div>
        <div className="SidebarNavOption" onClick={HandleClick6}>
          <i className="fa fa-university SideNavIcon" aria-hidden="true"></i>
          <p className="SideNavOption">Certificate</p>
        </div>
        <div className="SidebarNavOption" onClick={HandleClick7}>
          <i className="fa fa-cog SideNavIcon" aria-hidden="true"></i>
          <p className="SideNavOption">Reset Password</p>
        </div>
        <div className="SidebarNavOption">
          <i className="fa fa-sign-out SideNavIcon" aria-hidden="true"></i>
          <p className="SideNavOption">Log Out</p>
        </div>
      </div>
    </div>
  );
}
