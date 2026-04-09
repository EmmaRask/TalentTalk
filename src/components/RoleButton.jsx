export default function RoleButton({ onSelect, value, children, selected }) {
  return (
    <button
      onClick={() => onSelect(value)}
      style={{
        padding: "12px 18px",
        borderRadius: "8px",
        backgroundColor: selected ? "#4A90E2" : "#ffffff",
        color: selected ? "white" : "black",
        border: selected ? "2px solid #4A90E2" : "1px solid #ccc",
        cursor: "pointer",
        transition: "0.2s ease",
      }}
    >
      {children}
    </button>
  );
}