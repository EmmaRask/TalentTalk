
import { useState } from "react";
import { skillsByTrack } from "../data/skills";

export default function SavePersonForm({ onSave, onCancel }) {
  const [nickname, setNickname] = useState("");
  const [note, setNote] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  function toggleSkill(skillId) {
    setSelectedSkills((prev) => {
      if (prev.includes(skillId)) {
        return prev.filter((id) => id !== skillId);
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, skillId];
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!nickname.trim()) return;
    if (!selectedTrack) return;
    if (selectedSkills.length === 0) return;

    onSave({
      nickname: nickname.trim(),
      note: note.trim(),
      track: selectedTrack,
      skills: selectedSkills,
    });

    setNickname("");
    setNote("");
    setSelectedTrack("");
    setSelectedSkills([]);
  }

  const visibleSkills = selectedTrack ? skillsByTrack[selectedTrack] : [];

  return (
    <form onSubmit={handleSubmit} className="save-person-form">
      <h2>Save to Drinkbook</h2>

      <label>
        Nickname
        <input
          type="text"
          value={nickname}
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Write nickname or characteristics"
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

      <div className="save-track-picker">
        <p>Track</p>

        <div className="track-buttons">
          <button
            type="button"
            className={selectedTrack === "developer" ? "selected" : ""}
            onClick={() => {
              setSelectedTrack("developer");
              setSelectedSkills([]);
            }}
          >
            Developer
          </button>

          <button
            type="button"
            className={selectedTrack === "designer" ? "selected" : ""}
            onClick={() => {
              setSelectedTrack("designer");
              setSelectedSkills([]);
            }}
          >
            Designer
          </button>
        </div>
      </div>

      {selectedTrack && (
        <div className="save-skills-picker">
          <p>Pick up to 3 ingredients</p>

          <div className="selected-skills-list">
            {visibleSkills.map((skill) => {
              const isSelected = selectedSkills.includes(skill.id);

              return (
                <button
                  type="button"
                  key={skill.id}
                  className={`skill-button ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSkill(skill.id)}
                  style={{
                    backgroundColor: isSelected ? skill.color : "white",
                    color: isSelected ? "white" : "#121212",
                    borderColor: skill.color,
                  }}
                >
                  {skill.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

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