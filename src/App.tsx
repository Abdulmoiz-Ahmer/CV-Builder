import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import { CVControlPanelView } from "./Presentation";
import { CVProceed } from "../src/Presentation/CV/CVProceed/CVProceed";
import { BasicInformation } from "./Presentation/CV/BasicInformation";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CVControlPanelView />} />
          <Route path="/ciklum-profile" element={<CVProceed />} />
          <Route path="/basic-info" element={<BasicInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
