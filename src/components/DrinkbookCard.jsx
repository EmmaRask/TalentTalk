
export default function DrinkbookCard({ entry }) {
  return (
    <article className="drinkbook-card">
      <h3>{entry.nickname}</h3>

      {entry.note && <p>{entry.note}</p>}

      <p>
        <strong>Track:</strong> {entry.track}
      </p>

      <p>
        <strong>Skills:</strong> {entry.skills.join(", ")}
      </p>
    </article>
  );
}