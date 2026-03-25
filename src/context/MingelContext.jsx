import { createContext, useContext, useState } from "react";

const MingelContext = createContext();

export function MingelProvider({ children }) {
  const [userType, setUserType] = useState("");
  const [track, setTrack] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  function chooseUserType(type) {
    setUserType(type);
    setTrack("");
    setSelectedSkills([]);
  }


  function chooseTrack(nextTrack) {
    setTrack(nextTrack);
    setSelectedSkills([]);
  }

  function toggleSkill(skillId) {
    const alreadySelected = selectedSkills.includes(skillId);

    if (alreadySelected) {
      setSelectedSkills((prev) => prev.filter((id) => id !== skillId));
      return;
    }

    if (selectedSkills.length >= 3) return;

    setSelectedSkills((prev) => [...prev, skillId]);
  }

  function resetMingel() {
    setUserType("");
    setTrack("");
    setSelectedSkills([]);
  }

  function restartFromRole() {
  setTrack("");
  setSelectedSkills([]);
}


  return (
    <MingelContext.Provider
      value={{
        userType,
        track,
        selectedSkills,
        chooseUserType,
        chooseTrack,
        toggleSkill,
        resetMingel,
        restartFromRole,
      }}
    >
      {children}
    </MingelContext.Provider>
  );
}

export function useMingel() {
  return useContext(MingelContext);
}
