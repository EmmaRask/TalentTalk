export default function DrinkGlass({ skills, track }) {
  const colors = skills.map((skill) => skill.color);

  const gradient =
  track === "developer"
  ? `linear-gradient(
      to top,
      ${colors[0] || "#d9d9d9"} 0%,
      ${colors[1] || "#bfbfbf"} 55%,
      ${colors[2] || "#a6a6a6"} 100%
      )`
    : `linear-gradient(
      to top,
      ${colors[0] || "#d9d9d9"} 0%,
      ${colors[0] || "#d9d9d9"} 34%,
      ${colors[1] || "#bfbfbf"} %,
      ${colors[2] || "#a6a6a6"} 100%
    )`;

  const developerLiquidPath = `
    M 3 114
    Q 1 109 23 109
    L 184 108
    Q 219 110 216 114
    L 210 201
    Q 199 235 177 231
    L 45 230
    Q 13 232 11 201
    Z
  `;

  const designerLiquidPath = `
    M 30 70
    Q 29 67 69 67
    L 145 67
    Q 179 69 183 76
    L 117 165
    Q 121 160 100 158
    Q 94 157 85 146
    Z
    `;

  if (track==="developer") {
    return(
      <div className="drink-glass developer">
        <svg className="drink-liquid-svg" viewBox="0 0 220 320" aria-hidden="true">
  <defs>
    <linearGradient id="devDrinkGradient" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stopColor={colors[0] || "#d9d9d9"} />
      <stop offset="55%" stopColor={colors[1] || "#bfbfbf"} />
      <stop offset="100%" stopColor={colors[2] || "#a6a6a6"} />
    </linearGradient>
  </defs>

  <path
    d="
      M 3 114
      Q 1 109 23 109
      L 184 108
      Q 219 110 216 114
      L 210 201
      Q 199 235 177 231
      L 45 230
      Q 13 232 11 201
      Z
    "
  
    fill="url(#devDrinkGradient)"
    opacity="1.25"
  />
</svg>

        <img
          src="/media/devsheernoice.png"
          alt=""
          className="drink-base"
          aria-hidden="true"
        />

        <img
          src="/media/Circle.png"
          alt=""
          className="drink-surface"
          aria-hidden="true"
        />

        <img
          src="/media/ice.png"
          alt=""
          className="drink-ice"
          aria-hidden="true"
        />

        <svg className="drink-tint-svg" viewBox="0 0 220 320" aria-hidden="true">
          <defs>
            <linearGradient id="devDrinkTintGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="5%" stopColor={colors[0] || "#d9d9d9"} />
              <stop offset="49%" stopColor={colors[1] || "#bfbfbf"} />
              <stop offset="90%" stopColor={colors[2] || "#a6a6a6"} />
            </linearGradient>
          </defs>

          <path
            d={developerLiquidPath}
            fill="url(#devDrinkTintGradient)"
            opacity="0.35"
          />
        </svg>

        <svg className="drink-highlight-svg" viewBox="0 0 220 320" aria-hidden="true">
          <path
            d="
              M 25 118
              Q 32 110 100 113
              L 76 112
              Q 45 155 56 215
              Q 42 225 30 149
              Z
            "
            fill="white"
            opacity="0.40"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="drink-glass designer">
      <svg className="drink-liquid-svg" viewBox="0 0 220 320" aria-hidden="true">
        <defs>
          <linearGradient id="designerDrinkGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor={colors[0] || "#d9d9d9"} />
            <stop offset="45%" stopColor={colors[1] || "#bfbfbf"} />
            <stop offset="100%" stopColor={colors[2] || "#a6a6a6"} />
          </linearGradient>
        </defs>

        {/* själva vätskan */}
        <path
          d={designerLiquidPath}
          fill="url(#designerDrinkGradient)"
          opacity="0.82"
        />

        {/* vätskans yta */}
        <ellipse
          cx="105"
          cy="74"
          rx="82"
          ry="7"
          fill={colors[2] || "#a6a6a6"}
          opacity="0.9"
        />
      </svg>

      <img
        src="/media/des_glass_1.png"
        alt=""
        className="drink-base"
        aria-hidden="true"
      />

      <img
        src="/media/Circle.png"
        alt=""
        className="drink-surface-designer"
        aria-hidden="true"
      />
    </div>
  );
}
