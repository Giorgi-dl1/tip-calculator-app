import "../styles/Button.css";

export default function Button({
  value,
  setTipPercent,
  tipPercent,
  setCustomTip,
}) {
  const clickHandler = (value) => {
    setCustomTip(0);
    setTipPercent(value);
  };
  return (
    <div className="button-div">
      <button
        className={
          tipPercent === value
            ? "active-button tip-select-button"
            : "tip-select-button"
        }
        onClick={() => clickHandler(value)}
      >
        {value}%
      </button>
    </div>
  );
}
