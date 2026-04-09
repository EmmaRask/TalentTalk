import { useNavigate } from "react-router-dom";
import { text } from "../data/text";
import { useMingel } from "../context/MingelContext";
import RoleButton from "../components/RoleButton";
import { useState } from "react";
import ContinueButton from "../components/ContinueButton";




export default function HomePage() {
    const navigate = useNavigate();
    const { chooseUserType } = useMingel();
    const [selectedRole, setSelectedRole] = useState(null);
    function handleSelect(type) {
        setSelectedRole(type);
    }
      function handleContinue() {
    chooseUserType(selectedRole);
    navigate("/roll");
  }

  return (
    <main>
      <h1>{text.home.title}</h1>
      <p>{text.home.subtitle}</p>

      <RoleButton onSelect={handleSelect} value="company"  selected={selectedRole === "company"}
>
        {text.role.company}
      </RoleButton>

     <RoleButton onSelect={handleSelect} value="student" selected={selectedRole === "student"}
>
        {text.role.student}
      </RoleButton>
        <ContinueButton
        disabled={!selectedRole}
        onContinue={handleContinue}
      />
    </main>
  );
}

