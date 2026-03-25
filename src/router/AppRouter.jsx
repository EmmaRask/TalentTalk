import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RolePage from "../pages/RolePage";
import BuilderPage from "../pages/BuilderPage";
import ResultPage from "../pages/ResultPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/roll" element={<RolePage />} />
      <Route path="/bygg" element={<BuilderPage />} />
      <Route path="/resultat" element={<ResultPage />} />
    </Routes>
  );
}
