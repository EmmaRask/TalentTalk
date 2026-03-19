import { Navigate, useNavigate } from "react-router-dom";
import { useMingel } from "../context/MingelContext";
import { skillsByTrack } from "../data/skills";
import { text } from "../data/text";

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
  const heading =
    userType === "company" ? text.builder.company : text.builder.student;

  function handleCreateMocktail() {
    if (selectedSkills.length !== 3) return;
    navigate("/resultat");
  }

  return (
    <main>
      <h1>{heading}</h1>
      <p>
        {text.builder.subtitle} ({selectedSkills.length}/3)
      </p>

      <div>
        {visibleSkills.map((skill) => {
          const isSelected = selectedSkills.includes(skill.id);

          return (
            <button
              key={skill.id}
              onClick={() => toggleSkill(skill.id)}
              style={{
                margin: "6px",
                border: isSelected ? "2px solid black" : "1px solid gray",
              }}
            >
              {skill.label}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleCreateMocktail}
        disabled={selectedSkills.length !== 3}
      >
        {text.builder.create}
      </button>
    </main>
  );
}
