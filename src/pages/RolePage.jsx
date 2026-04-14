import { useNavigate, Navigate } from "react-router-dom";
import { useMingel } from "../context/MingelContext";
import { text } from "../data/text";
import { useState } from "react";
import AppLayout from "../components/AppLayout";
import RoleButton from "../components/RoleButton";
import ContinueButton from "../components/ContinueButton";

export default function RolePage() {
  const navigate = useNavigate();
  const { userType, chooseTrack } = useMingel();
  const [selectedRole, setSelectedRole] = useState(null);

  if (!userType) {
    return <Navigate to="/" replace />;
  }

  const heading =
    userType === "company"
      ? text.role.companyHeading
      : text.role.studentHeading;

  function handleSelect(type) {
    setSelectedRole(type);
  }

  function handleContinue() {
    chooseTrack(selectedRole);
    navigate("/bygg");
  }

  return (
    <AppLayout>
      <main>
        <h1>{heading}</h1>
        <p><strong>{text.role.subtitle}:</strong></p>

        <RoleButton
          onSelect={handleSelect}
          value="developer"
          selected={selectedRole === "developer"}
        >
          {text.role.developer}
        </RoleButton>

        <RoleButton
          onSelect={handleSelect}
          value="designer"
          selected={selectedRole === "designer"}
        >
          {text.role.designer}
        </RoleButton>

        <ContinueButton
          disabled={!selectedRole}
          onContinue={handleContinue}
        />
      </main>
    </AppLayout>
  );
}