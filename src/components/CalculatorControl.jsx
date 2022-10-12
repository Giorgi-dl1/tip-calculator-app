import Button from "./Button";
import "../styles/CalculatorControl.css";
import dollarIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";
import { useState } from "react";

export default function CalculatorControl({
  setBill,
  setPeopleNum,
  peopleNum,
  tipPercent,
  setTipPercent,
  bill,
}) {
  const [customTip, setCustomTip] = useState(0);
  const [showError, setShowError] = useState(false);
  const tipValues = [5, 10, 15, 25, 50];

  const customTipHandler = (value) => {
    setCustomTip(Number(value));
    setTipPercent(Number(value));
  };
  const setPeople = (value) => {
    if (Number(value) === 0) {
      setShowError(true);
    }
    if (showError && Number(value) !== 0) setShowError(false);
    setPeopleNum(Number(value));
  };
  return (
    <div className="control-div">
      <div className="label">Bill</div>
      <div className="input-div">
        <input
          type="number"
          placeholder="0"
          className="styled-input"
          value={bill === 0 ? "" : bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
        <img src={dollarIcon} alt="dollar-icon" className="icon" />
      </div>

      <div className="tip-select">
        <div className="label">Select Tip %</div>
        <div className="button-list">
          {tipValues.map((value) => (
            <Button
              value={value}
              key={value}
              setTipPercent={setTipPercent}
              tipPercent={tipPercent}
              setCustomTip={setCustomTip}
            />
          ))}
          <div>
            <input
              type="number"
              placeholder="Custom"
              className="tip-input"
              value={customTip === 0 ? "" : customTip}
              onChange={(e) => customTipHandler(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="label__error">
        <div className="label">Number of People</div>
        {showError ? <div className="error">Can't be zero</div> : ""}
      </div>

      <div className="input-div">
        <input
          type="number"
          className={showError ? "errorAct styled-input" : "styled-input"}
          value={peopleNum === 0 ? "" : peopleNum}
          placeholder="0"
          onChange={(e) => setPeople(e.target.value)}
          min={1}
        />
        <img src={personIcon} alt="person icon" className="icon" />
      </div>
    </div>
  );
}
