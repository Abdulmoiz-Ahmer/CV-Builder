import React from "react";
import Header from "../Header/Header";
import "./CVControlPanelView.css";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../assets/welcome_background.svg";
import Ellipse from "../../../assets/Ellipse.svg";
import Subtraction from "../../../assets/Subtraction.svg";
function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("ciklum-profile");
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
            <p className="heading font">
              Congratulation! on being short-listed
            </p>

            <p className="welcome-text font">
              Welcome to Ciklum Profile builder
            </p>
            <p className="description font">
              You are just a few steps away from joining us. Building your
              Ciklum Profile will streamline your hiring process.
            </p>
          </div>
        </div>
        <div className="start-button">
          <button onClick={routeChange} className="btn fonts">
            Start Building Now
          </button>
        </div>
      </div>
    </main>
  );
}

export const CVControlPanelView = index;
