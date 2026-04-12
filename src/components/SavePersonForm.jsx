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
      <label>
        Nickname
        <input
          type="text"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Linda with green glasses"
        />
      </label>

      <label>
        Note
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Met at the event, interested in React"
          rows={3}
        />
      </label>

      <div className="save-person-actions">
        <button type="submit" className="primary-button">
          Save to Drinkbook
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}