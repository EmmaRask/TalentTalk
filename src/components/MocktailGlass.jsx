export default function MocktailGlass({ skills, track }) {
  const colors = skills.map((skill) => skill.color);

  return (
    <div className={`glass-wrapper ${track}`}>
      <div className="glass">
        <div className="layer" style={{ backgroundColor: colors[0] || "#ddd" }} />
        <div className="layer" style={{ backgroundColor: colors[1] || "#ccc" }} />
        <div className="layer" style={{ backgroundColor: colors[2] || "#bbb" }} />
      </div>

      <div className="stem" />
      <div className="base" />
    </div>
  );
}
