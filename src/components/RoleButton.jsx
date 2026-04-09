export default function RoleButton({ onSelect, value, children }) {
  return (
    <button onClick={() => onSelect(value)}>
      {children}
    </button>
  );
}
