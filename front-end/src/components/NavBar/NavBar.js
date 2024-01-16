import React from "react";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBarLogo">
        <img
          className="NavLogoImg"
          src={require("../Img/Qrious_Brainz_Logo-02.png")}
          alt="Logo"
        />
      </div>
      <div className="NavHeading">
        <p className="NavTitle"><i className="fa fa-home" aria-hidden="true"></i> Dashboard</p>
      </div>
      <div className="NavUserActions">
        <img
          className="NavUserImg"
          src={require("../Img/Shiwam_Dwivedi (2).jpg")}
          alt="profile pic"
        ></img>
        <button className="NavLogoutBtn">
          <i className="fa fa-sign-out NavLogoutIcon" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
