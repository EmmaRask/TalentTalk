export default function RoleButton({ onSelect, value, children, selected }) {
  return (
    <button
      onClick={() => onSelect(value)}
      style={{
        padding: "12px 18px",
        borderRadius: "0",
        marginLeft:"1rem",
        fontSize:"2rem",
        backgroundColor: selected ? "#001A52" : "#ffffff",
        color: selected ? "white" : "black",
        border: selected ? "2px solid #000000" : "1px solid #ccc",
        cursor: "pointer",
        transition: "0.2s ease",
        width:"309px",
        height:"100px"
      }}
    >
      {children}
    </button>
  );
}