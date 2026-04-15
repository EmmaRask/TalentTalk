import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMingel } from "../context/MingelContext";
import { skillsByTrack } from "../data/skills";
import { text } from "../data/text";
import DrinkGlass from "../components/DrinkGlass";
import AppLayout from "../components/AppLayout";
import SavePersonForm from "../components/SavePersonForm";
import { addDrinkbookEntry } from "../utils/drinkbookStorage";
import DrinkbookStampButton from "../components/DrinkBookStampButton";


function getButtonTextColor(backgroundColor) {
  const lightColors = ["#FFD500", "#FFB300"];
  return lightColors.includes(backgroundColor) ? "#1b1b1b" : "#ffffff";
}

export default function ResultPage() {
  const navigate = useNavigate();
  const { userType, track, selectedSkills, restartFromRole } = useMingel();

  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [hasSavedToDrinkbook, setHasSavedToDrinkbook] = useState(false);
  const [showIceBreaker, setShowIceBreaker] = useState(false);
  const iceBreakers = text.result.iceBreakers;
  const randomIceBreaker =
  iceBreakers[Math.floor(Math.random() * iceBreakers.length)];
  
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
    track: formData.track,
    skills: formData.skills,
    createdAt: new Date().toISOString(),
  };

  addDrinkbookEntry(newEntry);

  setShowSaveModal(false);
  setHasSavedToDrinkbook(true);
  setSaveMessage("Added to Drinkbook");

  setTimeout(() => {
    setSaveMessage("");
  }, 2500);
}


  function handleReset() {
    restartFromRole();
    navigate("/roll");
  }

  return (
    <AppLayout>
      <div className="result-page">
        <main>
          <h1 className="result-title">{text.result.title}</h1>
            <p className="result-blend">
            <strong>{text.result.drinkBlend[track]}</strong>
            </p>
    
          <DrinkGlass skills={selectedSkillObjects} track={track} />

            <div>
            <h2>Your selected skillsets:</h2>
            <div className="selected-skills-list">
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
          <p className="result-instruction">
            {text.result.instruction}
          </p>
         <div className="result-actions">
        <div 
            className="icebreaker-section">
        <div
            className="icebreaker-toggle"
            onClick={() => setShowIceBreaker((prev) => !prev)}
            >
            <strong>Need an ice breaker?</strong>
            <span className={`arrow ${showIceBreaker ? "open" : ""}`}>▾</span>
        </div>

    {showIceBreaker && (
      <div className="icebreaker-box">
        <p>{randomIceBreaker}</p>
      </div>
    )}
  </div>

  {!hasSavedToDrinkbook && (
    <DrinkbookStampButton onClick={() => setShowSaveModal(true)} />
  )}
</div>


            {showSaveModal && (
                <div 
                        className="modal-overlay" onClick={() => setShowSaveModal(false)}>
                    <div
                        className="save-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <SavePersonForm
                            onSave={handleSavePerson}
                            onCancel={() => setShowSaveModal(false)}
                        />
                    </div>
                </div>
            )}

            {saveMessage && <div className="toast-message">{saveMessage}</div>}
          {/* ) : (
            <SavePersonForm
              onSave={handleSavePerson}
              onCancel={() => setShowSaveForm(false)}
            />
          )} */}

          <button className="primary-button" onClick={handleReset}>
            {text.result.reset}
          </button>
        </main>
      </div>
    </AppLayout>
  );
}