
import { useNavigate, Navigate } from "react-router-dom";
import { useMingel } from "../context/MingelContext";
import { text } from "../data/text";
import AppLayout from "../components/AppLayout";

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
    <AppLayout>
    <main>
        <h1>{heading}</h1>
      <p>{text.role.subtitle}:</p>

      <button onClick={() => handleSelect("developer")}>
        {text.role.developer}
      </button>

      <button onClick={() => handleSelect("designer")}>
        {text.role.designer}
      </button>
    </main>
    </AppLayout>
  );
}

