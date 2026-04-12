import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMingel } from "../context/MingelContext";
import { skillsByTrack } from "../data/skills";
import { text } from "../data/text";
import DrinkGlass from "../components/DrinkGlass";
import AppLayout from "../components/AppLayout";
import SavePersonForm from "../components/SavePersonForm";
import { addDrinkbookEntry } from "../utils/drinkbookStorage";

function getButtonTextColor(backgroundColor) {
  const lightColors = ["#FFD500", "#FFB300"];
  return lightColors.includes(backgroundColor) ? "#1b1b1b" : "#ffffff";
}

export default function ResultPage() {
  const navigate = useNavigate();
  const { userType, track, selectedSkills, restartFromRole } = useMingel();

  const [showSaveForm, setShowSaveForm] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  if (!userType) {
    return <Navigate to="/" replace />;
  }

  if (!track || selectedSkills.length !== 3) {
    return <Navigate to="/bygg" replace />;
  }

  const selectedSkillObjects = skillsByTrack[track].filter((skill) =>
    selectedSkills.includes(skill.id)
  );

  function handleSavePerson(formData) {
    const newEntry = {
      id: crypto.randomUUID(),
      nickname: formData.nickname,
      note: formData.note,
      track,
      skills: selectedSkills,
      createdAt: new Date().toISOString(),
    };

    addDrinkbookEntry(newEntry);
    setShowSaveForm(false);
    setSaveMessage("Saved to Drinkbook.");
  }

  function handleReset() {
    restartFromRole();
    navigate("/roll");
  }

  return (
    <AppLayout>
      <div className="result-page">
        <main>
          <h1>{text.result.title}</h1>

          <DrinkGlass skills={selectedSkillObjects} track={track} />

          <div>
            <h2>Your selected skillsets:</h2>
            <div className="skills-grid">
              {selectedSkillObjects.map((skill) => (
                <button
                  key={skill.id}
                  className="skill-button selected"
                  style={{
                    backgroundColor: skill.color,
                    color: getButtonTextColor(skill.color),
                    borderColor: skill.color,
                  }}
                >
                  {skill.label}
                </button>
              ))}
            </div>
          </div>

          <p>
            <strong>{text.result.drinkBlend[track]}</strong>
          </p>

          <p>{text.result.instruction}</p>

          <p>
            <strong>{text.result.question}</strong>
          </p>

          {!showSaveForm ? (
            <button onClick={() => setShowSaveForm(true)}>
              Save to Drinkbook
            </button>
          ) : (
            <SavePersonForm
              onSave={handleSavePerson}
              onCancel={() => setShowSaveForm(false)}
            />
          )}

          {saveMessage && <p>{saveMessage}</p>}

          <button className="primary-button" onClick={handleReset}>
            {text.result.reset}
          </button>
        </main>
      </div>
    </AppLayout>
  );
}