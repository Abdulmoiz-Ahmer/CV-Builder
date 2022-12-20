import React from "react";
import Header from "../Header/Header";
import "./index.css";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../../assets/CloseIcon.svg";
import Ellipse from "../../../assets/Ellipse.svg";
import Subtraction from "../../../assets/Subtraction.svg";
import BasciInfoImage from "../../../assets/basicInfo-background.png";
import ArrowIcon from "../../../assets/arrow.svg";
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
            <p className="basic-heading">1. Basic Information</p>

            <div className="input">
              <label className="field-label ">Name:</label>
              <div className="input-fields">
                <div className="form-group-input">
                  <input
                    type="text"
                    name="field1"
                    className="field-divided"
                    placeholder=""
                    required
                  />{" "}
                  <label className="float-label"> First Name</label>
                </div>
                <div className="form-group-input">
                  <input
                    type="text"
                    name="field2"
                    className="field-divided"
                    placeholder=""
                    required
                  />
                  <label className="float-label"> Last Name</label>
                </div>
              </div>
            </div>
            <div className="form-group input">
              <label className="field-label">Position Applied for:</label>
              <select name="field4" className="field-select">
                <option value="Advertise">Database Engineer</option>
                <option value="Partnership">QA - Automation engineer</option>
                <option value="General Question">Project Manager</option>
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
            <div className="country-form-group input">
              <label className="field-label">Citizenship:</label>

              <input
                type="text"
                name="field3"
                className="field-long input-fields"
                required
              />
              <label className="country-label"> Country</label>
            </div>

            <div className="country-form-group input">
              <label className="field-label">Current Location:</label>
              <input
                type="text"
                name="field3"
                className="field-long input-fields"
                required
              />
              <label className="country-label"> City</label>
            </div>
          </div>
          <div className="next-button">
            <div className="footer-part">
              <button className="next">Next</button>
              <img src={ArrowIcon} alt="arrowIcon" className="" />
              <span>2. Profile summary</span>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export const BasicInformation = index;
