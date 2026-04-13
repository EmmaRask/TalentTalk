
import { useState } from "react";

export default function SavePersonForm({ onSave, onCancel }) {
  const [nickname, setNickname] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!nickname.trim()) return;

    onSave({
      nickname: nickname.trim(),
      note: note.trim(),
    });

    setNickname("");
    setNote("");
  }

  return (
    <form onSubmit={handleSubmit} className="save-person-form">
        <h2>Save to Drinkbook</h2>

      <label>
        Nickname
        <input
          type="text"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Write nickname or characteristic"
        />
      </label>

      <label>
        Note
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="LinkedIn name, company, reminder"
          rows={3}
        />
      </label>

      <div className="save-person-actions">
        <button type="submit" className="primary-button">
          Save
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}