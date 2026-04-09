import { useNavigate, Navigate } from "react-router-dom";
import { useMingel } from "../context/MingelContext";
import { text } from "../data/text";
import RoleButton from "../components/RoleButton";

export default function RolePage() {
  const navigate = useNavigate();
  const { userType, chooseTrack } = useMingel();

  if (!userType) {
    return <Navigate to="/" replace />;
  }

  const heading =
    userType === "company"
    ? text.role.companyHeading
    :text.role.studentHeading;

  function handleSelect(track) {
    chooseTrack(track);
    navigate("/bygg");
  }

  return (
    <main>
        <h1>{heading}</h1>
      <p>{text.role.subtitle}:</p>

      <RoleButton onSelect={handleSelect} value="developer">
              {text.role.developer}
            </RoleButton>
      
           <RoleButton onSelect={handleSelect} value="designer">
              {text.role.designer}
            </RoleButton>
    </main>
  );
}

