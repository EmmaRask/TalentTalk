export default function ContinueButton({ disabled, onContinue }) {
  return (
    <button
      onClick={onContinue}
      disabled={disabled}
      style={{
        marginTop: "20px",
        marginLeft:"1rem",
        padding: "16px",
        background: disabled ? "#ccc" : "#E51236",
        color: "white",
        borderRadius: "24px",
        width:"309px",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >

      Continue
    </button>
  );
}