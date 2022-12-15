import React, { useState } from "react";
import "./Header.css";
import Ciklumlogo from "../../../assets/Ciklum_logo.svg";
import ProfileImage from "../../../assets/user.png";

function Header() {
  const [open, setOpen] = React.useState(false);
  let subMenu = document.getElementById("subMenu");
  console.log("submenu", subMenu?.classList);
  const showDropdown = () => {
    setOpen(!open);
  };
  return (
    <nav>
      <div className="ciklum-info">
        <div className="ciklum-logo">
          <img src={Ciklumlogo} className="logo" alt="Profile" />
          <div className="ciklum">
            <span className="ciklum-text">CIKLUM</span>
            <span className="ciklum-builder">PROFILE BUILDER</span>
          </div>
        </div>

        <div className="profile-builder"></div>
      </div>

      <div className="userProfile">
        <img src={ProfileImage} alt="cat" className="user-pic" />
        <div className="designation">
          <span className="user-Name">James Mathues</span>
          <span className="user-designation">Java Developer</span>
        </div>

        <i
          onClick={showDropdown}
          className="fa fa-angle-down drop-downIcon"
          aria-hidden="true"
        ></i>
      </div>

      {open ? (
        <div className="sub-menu-wrap" id="subMenu">
          <div className="sub-menu">
            <div className="user-info">
              <p>View Profile</p>
              <p>My Job Applications</p>
              <p>Logout </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Header;
