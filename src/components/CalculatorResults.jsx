import "../styles/CalculatorResults.css";

export default function CalculatorResults({
  bill,
  peopleNum,
  tipPercent,
  resetFunction,
}) {
  const tipAmount =
    bill !== 0 && peopleNum !== 0 && tipPercent !== 0
      ? (bill * tipPercent) / 100 / peopleNum
      : 0;
  const roundedTipAmount = Math.round(tipAmount * 100 + Number.EPSILON) / 100;
  const total =
    tipAmount === 0 ? 0 : (bill + tipAmount * peopleNum) / peopleNum;
  const roundedTotal = Math.round(total * 100 + Number.EPSILON) / 100;
  return (
    <div className="calculator-results">
      <div>
        <div className="counter-div">
          <div className="header">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="amount">
            ${tipAmount === 0 ? "0.00" : roundedTipAmount}
          </div>
        </div>
        <div className="counter-div">
          <div className="header">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="amount">${total === 0 ? "0.00" : total}</div>
        </div>
      </div>

      <button className="reset-button" onClick={() => resetFunction()}>
        RESET
      </button>
    </div>
  );
}
