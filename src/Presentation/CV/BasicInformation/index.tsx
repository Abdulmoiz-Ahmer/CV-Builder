import React from "react";
import Header from "../Header/Header";
import "./index.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/CloseIcon.svg";
import Ellipse from "../../../assets/Ellipse.svg";
import Subtraction from "../../../assets/Subtraction.svg";
import BasciInfoImage from "../../../assets/basicInfo-background.png";
import DriveIcon from "../../../assets/DriveIcon.svg";
function index() {
  return (
    <main className="info">
      <Header />
      <div className="info-container">
        <img src={Ellipse} alt="ellipse" className="img-ellipse" />
        <img
          src={BasciInfoImage}
          alt="substraction"
          className="basic-info-image"
        />
        <div>
          <img src={CloseIcon} alt="close-icon" className="close-icon" />
        </div>

        <form>
          <div className="form-style-1">
            <p className="heading">1. Basic Information</p>

            <div className="form-group input">
              <label className="field-label">Name:</label>
              <div className="input-fields">
                <input
                  type="text"
                  name="field1"
                  className="field-divided"
                  placeholder="First"
                />{" "}
                <input
                  type="text"
                  name="field2"
                  className="field-divided"
                  placeholder="Last"
                />
              </div>
            </div>
            <div className="form-group input">
              <label className="field-label">Position Applied for:</label>
              <select name="field4" className="field-select">
                <option value="Advertise">Advertise</option>
                <option value="Partnership">Partnership</option>
                <option value="General Question">General</option>
              </select>
            </div>
            <div className="form-group input">
              <label className="field-label">Seniority Level:</label>
              <div className="radio-group ">
                <div className="radio-1">
                  <input type="radio" id="child" name="age" value="child" />
                  <label className="radio-label">Junior</label>
                  <input type="radio" id="adult" name="age" value="adult" />
                  <label>Middle</label>
                  <input type="radio" id="senior" name="age" value="senior" />
                  <label>Senior</label>
                </div>
                <div className="radio-2">
                  <input type="radio" id="senior" name="age" value="senior" />
                  <label>Lead</label>

                  <input type="radio" id="senior" name="age" value="senior" />
                  <label>Other</label>
                </div>
              </div>
            </div>
            <div className="form-group-email input">
              <label className="field-label">Citizenship:</label>
              <input
                type="text"
                name="field3"
                className="field-long input-fields"
              />
            </div>

            <div className="form-group-email input">
              <label className="field-label">Current Location:</label>
              <input
                type="text"
                name="field3"
                className="field-long input-fields"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export const BasicInformation = index;
