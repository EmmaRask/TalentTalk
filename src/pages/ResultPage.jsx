import { Navigate, useNavigate } from "react-router-dom";
import { useMingel } from "../context/MingelContext";
import { skillsByTrack } from "../data/skills";
import { text } from "../data/text";
import DrinkGlass from "../components/DrinkGlass";
import MocktailGlass from "../components/MocktailGlass";

export default function ResultPage() {
    const navigate = useNavigate();
    const { userType, track, selectedSkills, restartFromRole } = useMingel();

    if (!userType) {
        return <Navigate to="/" replace />;
    }

    if (!track || selectedSkills.length !== 3) {
        return <Navigate to="/bygg" replace />;
    }

    const selectedSkillObjects = skillsByTrack[track].filter((skill) =>
        selectedSkills.includes(skill.id)
    );

    function handleReset() {
        restartFromRole();
        navigate("/roll");
    }


    return (
    <main>
        <h1>{text.result.title}</h1>

        <p>
            <strong>User type:</strong> {userType}
        </p>

        <p>
            <strong>Track:</strong> {track}
        </p>

        
        <DrinkGlass skills={selectedSkillObjects} track={track} />
    
      {/*<MocktailGlass skills={selectedSkillObjects} track={track} />*/}
        <div>
            <h2>Your selected skillsets:</h2>
            <ul>
                {selectedSkillObjects.map((skill) => (
                <li key={skill.id}>{skill.label}</li>
                ))}
            </ul>
        </div>

        <p>{text.result.instruction}</p>
            <p>
            <strong>{text.result.question}</strong>
        </p>

        <button onClick={handleReset}>{text.result.reset}</button>
    </main>
  );
}
