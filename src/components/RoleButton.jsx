export default function RoleButton({ onSelect, value, children, selected }) {
  return (
    <button onClick={() => onSelect(value)}
     style={{
        border: selected ? "2px solid #132b47" : "1px solid #ccc",
        background: selected ? "#E8F1FF" : "white",
        padding: "10px 16px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
>
      {children}
    </button>
  );
}
