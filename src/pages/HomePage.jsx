

import { useNavigate } from "react-router-dom";
import { text } from "../data/text";
import { useMingel } from "../context/MingelContext";

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
      <p>{text.home.subttitle}</p>

      <button onClick={() => handleSelect('student')}>
        {text.role.student}
      </button>

     <button onClick={() => handleSelect('company')}>
        {text.role.company}
      </button>

    </main>
  );
}

