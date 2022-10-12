import { useState } from "react";
import CalculatorControl from "./components/CalculatorControl";
import CalculatorResults from "./components/CalculatorResults";
import logo from "./images/logo.svg";

function App() {
  const [bill, setBill] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);

  const resetFunction = () => {
    setBill(0);
    setPeopleNum(0);
    setTipPercent(0);
  };
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="calculator">
        <CalculatorControl
          setBill={setBill}
          bill={bill}
          peopleNum={peopleNum}
          setPeopleNum={setPeopleNum}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
        />
        <CalculatorResults
          bill={bill}
          peopleNum={peopleNum}
          tipPercent={tipPercent}
          resetFunction={resetFunction}
        />
      </div>
    </div>
  );
}

export default App;
