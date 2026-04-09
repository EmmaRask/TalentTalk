export default function ContinueButton({ disabled, onContinue }) {
  return (
    <button
      onClick={onContinue}
      disabled={disabled}
      style={{
        marginTop: "20px",
        padding: "12px 20px",
        background: disabled ? "#ccc" : "#4A90E2",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      Continue
    </button>
  );
}