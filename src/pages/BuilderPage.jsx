import { Navigate, useNavigate } from "react-router-dom";
import { useMingel } from "../context/MingelContext";
import { skillsByTrack } from "../data/skills";
import { text } from "../data/text";
import AppLayout from "../components/AppLayout";

export default function BuilderPage() {
  const navigate = useNavigate();
  const { userType, track, selectedSkills, toggleSkill } = useMingel();

  if (!userType) {
    return <Navigate to="/" replace />;
  }

  if (!track) {
    return <Navigate to="/roll" replace />;
  }

  const visibleSkills = skillsByTrack[track];
  const selectedSkillObjects = visibleSkills.filter((skill) =>
    selectedSkills.includes(skill.id)
  );

  const heading =
    userType === "company" ? text.builder.company : text.builder.student;

  function handleCreateMocktail() {
    if (selectedSkills.length !== 3) return;
    navigate("/resultat");
  }

  function getButtonTextColor(backgroundColor) {
    const lightColors = ["#FFD500", "#FFB300"];
    return lightColors.includes(backgroundColor) ? "#1b1b1b" : "#ffffff";
  }

  return (
    <AppLayout>
    <main>
      <h1>{heading}</h1>
      <p>
        {text.builder.subtitle} ({selectedSkills.length}/3)
      </p>

      <div className="skills-grid">
        {visibleSkills.map((skill) => {
          const isSelected = selectedSkills.includes(skill.id);

          return (
            <button
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              className={`skill-button ${isSelected ? "selected" : ""}`}
              style={{
                borderColor: skill.color,
                backgroundColor: isSelected ? skill.color : "#ffffff",
                color: isSelected ? getButtonTextColor(skill.color) : "#1b1b1b",
              }}
            >
              {skill.label}
            </button>
          );
        })}
      </div>

      <div className="selected-colors-preview">
        {[0, 1, 2].map((index) => {
          const skill = selectedSkillObjects[index];

          return (
            <span
              key={index}
              className="color-dot"
              style={{
                backgroundColor: skill ? skill.color : "transparent",
                borderColor: skill ? skill.color : "#1b2a6b",
              }}
            />
          );
        })}
      </div>
      <div className="builder-cta">
        <button
          className="primary-button"
          onClick={handleCreateMocktail}
          disabled={selectedSkills.length !== 3}
        >
          {text.builder.create}
        </button>
      </div>
    </main>
    </AppLayout>
  );
}