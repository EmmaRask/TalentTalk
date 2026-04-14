
import { useEffect, useState } from "react";
import { getDrinkbookEntries } from "../utils/drinkbookStorage";
import DrinkbookCard from "./DrinkbookCard";

export default function DrinkbookDrawer({ isOpen, onClose }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const savedEntries = getDrinkbookEntries();
      setEntries(savedEntries);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="drinkbook-overlay" onClick={onClose}>
      <aside
        className="drinkbook-drawer"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="drinkbook-header">
            <h2>Drinkbook</h2>
            <button className="drinkbook-close-button" onClick={onClose}>
                Close
            </button>
        </div>

        {entries.length === 0 ? (
          <p>No saved people yet.</p>
        ) : (
          <div className="drinkbook-list">
            {entries.map((entry) => (
              <DrinkbookCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}