import { useNavigate } from "react-router-dom";
import { text } from "../data/text";
import { useMingel } from "../context/MingelContext";
import RoleButton from "../components/RoleButton";

export default function HomePage() {
    const navigate = useNavigate();
    const { chooseUserType } = useMingel();
    function handleSelect(type) {
        chooseUserType(type);
        navigate("/roll");
    }
  return (
    <main>
      <h1>{text.home.title}</h1>
      <p>{text.home.subtitle}</p>

      <RoleButton onSelect={handleSelect} value="company">
        {text.role.company}
      </RoleButton>

     <RoleButton onSelect={handleSelect} value="student">
        {text.role.student}
      </RoleButton>

    </main>
  );
}

