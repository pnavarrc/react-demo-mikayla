import "./styles.css";
import { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
    <div className="inner-content">
      <div className="cell cell-0">
        <div className="locationdetails">
          <div className="state">California</div>
          <div className="date">May 23, 2022</div>
        </div>
        <div className="actions">
          <button className="share">Share</button>
          <button className="findvaccine">Find a vaccine</button>
        </div>
      </div>
      <div className="cell cell-1">
        <div className="locationscore">
          <div className="framework">Community Risk Level</div>
          <div className="level">Medium</div>
        </div>
        <div className="communitymetrics">
          <div className="metric-container">
            <div className="metric-name">Cases</div>
            <div className="metric-value">259.4</div>
            <div className="metric-def">Weekly new reported cases per 100K</div>
          </div>
          <div className="metric-container">
          <div className="metric-name">Admissions</div>
            <div className="metric-value">5.9</div>
            <div className="metric-def">Weekly COVID admissions per 100K</div>
          </div>
          <div className="metric-container">
          <div className="metric-name">Patients w/ COVID</div>
            <div className="metric-value">3.5%</div>
            <div className="metric-def">Patients with COVID of all beds</div>
          </div>
          <div className="metric-container">
          <div className="metric-name">Vaccinations</div>
            <div className="metric-value">82.5%</div>
            <div className="metric-def">1+ dose</div>
          </div>
        </div>
      </div>
      <div className="cell cell-2">
        <div className="transmissionheader">Avoiding infection?</div>
        <div className="transmissionbody">
          People who need extra caution can still make decisions using our old
          transmission metrics.
        </div>
      </div>
      <div className="cell cell-3">
        <div className="alerts">
          <div className="alert-copy">Get the latest news and alerts about this location.</div>
        <input aria-invalid="false" autocomplete="email" id="fieldEmail" name="cm-wurhhh-wurhhh" placeholder="Email address" type="email" class="MuiInputBase-input MuiOutlinedInput-input" value=""></input>
        </div>
      </div>
    </div>
    </div>
  );
}
