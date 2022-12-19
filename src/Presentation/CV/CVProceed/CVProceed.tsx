import React from "react";
import Header from "../Header/Header";
import "./CVProceed.css";
import { useNavigate } from "react-router-dom";
import LinkdienIcon from "../../../assets/LinkdienIcon.svg";
import Ellipse from "../../../assets/Ellipse.svg";
import Subtraction from "../../../assets/Subtraction.svg";
import NewProfile from "../../../assets/NewProfileIcon.svg";
import DriveIcon from "../../../assets/DriveIcon.svg";
function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/basic-info");
  };
  return (
    <main className="main">
      <Header />
      <div className="hero">
        <img src={Ellipse} alt="ellipse" className="img-ellipse" />
        <img
          src={Subtraction}
          alt="substraction"
          className="img-substraction"
        />
        <div className="hero-body">
          <div className="hero-text-box">
            <p className="proceed-text font">How would you like to proceed ?</p>
            <p className="description font">
              Create your profile from scratch, Upload a CV document from your
              computer or import the details from LinkedIn.
            </p>
          </div>
        </div>
        <div className="start-profile">
          <div className="boxes">
            <div className="Profile-box">
              <div className="new-profile" onClick={routeChange}>
                <img
                  src={NewProfile}
                  alt="new-profile"
                  className="profile-icon"
                />
              </div>
              <span className="profile-text">Create New Profile</span>
            </div>

            <div className="Profile-box">
              <div className="new-profile">
                <img
                  src={DriveIcon}
                  alt="new-profile"
                  className="profile-icon"
                />
              </div>
              <span className="profile-text">Upload CV Doc</span>
            </div>

            <div className="Profile-box">
              <div className="new-profile">
                <img
                  src={LinkdienIcon}
                  alt="new-profile"
                  className="profile-icon"
                />
              </div>
              <span className="profile-text">Copy from LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const CVProceed = index;
