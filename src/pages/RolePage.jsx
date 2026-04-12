<<<<<<< homepage
import { useNavigate, Navigate } from "react-router-dom";
import { useMingel } from "../context/MingelContext";
import { text } from "../data/text";
import RoleButton from "../components/RoleButton";
import { useState } from "react";
import ContinueButton from "../components/ContinueButton";


export default function RolePage() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const { userType, chooseTrack } = useMingel();

  if (!userType) {
    return <Navigate to="/" replace />;
  }

  const heading =
    userType === "company"
    ? text.role.companyHeading
    :text.role.studentHeading;

  function handleSelect(type) {
    setSelectedRole(type);
  }
function handleContinue() {
  chooseTrack(selectedRole);   
  navigate("/bygg");           
}



  return (
    <main>
        <h1>{heading}</h1>
      <p>{text.role.subtitle}:</p>

      <RoleButton onSelect={handleSelect} value="developer"  selected={selectedRole === "developer"}
      >
         {text.role.developer}
      </RoleButton>
      
      <RoleButton onSelect={handleSelect} value="designer"  selected={selectedRole === "designer"}
      >
         {text.role.designer}
      </RoleButton>

      <ContinueButton
        disabled={!selectedRole}
        onContinue={handleContinue}
      />
    </main>
  );
}

=======

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

>>>>>>> develop
