export default function DrinkGlass({ skills, track }) {
  const colors = skills.map((skill) => skill.color);

  const overlaySrc =
    track === "designer" ? "/media/designGlass.png" : "/media/devGlass.png";

  const gradient = `linear-gradient(
    to top,
    ${colors[0] || "#d9d9d9"} 0%,
    ${colors[0] || "#d9d9d9"} 28%,
    ${colors[1] || "#bfbfbf"} 50%,
    ${colors[2] || "#a6a6a6"} 100%
  )`;

  return (
    <div className={`drink-glass ${track}`}>
      <div className="drink-liquid" style={{ background: gradient }} />
      <img
        src={overlaySrc}
        alt=""
        className="drink-overlay"
        aria-hidden="true"
      />
    </div>
  );
}