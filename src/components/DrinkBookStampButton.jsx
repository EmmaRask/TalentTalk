

export default function DrinkbookStampButton({ onClick }) {
  return (
    <button className="drinkbook-stamp-button" 
        onClick={onClick} 
        aria-label="Save to Drinkbook"
    >
        <svg viewBox="0 0 120 120" className="drinkbook-stamp" aria-hidden="true">
            <defs>
                <path
                    id="topArc"
                    d="M 20,60
                    A 40,40 0 0,1 100,60"
                />
                <path
                    id="bottomArc"
                    d="M 12,60 
                    A 40,40 0 0,0 100,60"
                />
            </defs>

            <text className="stamp-text">
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                    SAVE TO
                </textPath>
            </text>

            <text className="stamp-text">
                <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
                    DRINKBOOK
                </textPath>
            </text>

            <text x="60" y="68" textAnchor="middle" className="stamp-emoji">
                🍹
            </text>
        </svg>
    </button>
  );
}