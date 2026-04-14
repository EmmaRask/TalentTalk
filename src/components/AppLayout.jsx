import Logo from "./Logo";
import { useState } from "react";
import DrinkbookDrawer from "./DrinkbookDrawer";

export default function AppLayout({ children }) {
  const [isDrinkbookOpen, setIsDrinkbookOpen] = useState(false);

  return (
    <main className="page-layout">
      <header className="page-header">
        <Logo />
        <button
          className="drinkbook-button"
          onClick={() => setIsDrinkbookOpen(true)}
        >
          <span className="drinkbook-emoji">🍹📖</span>
          <span className="drinkbook-label">Drinkbook</span>
        </button>
      </header>

      <section className="page-content">{children}</section>

      <DrinkbookDrawer
        isOpen={isDrinkbookOpen}
        onClose={() => setIsDrinkbookOpen(false)}
      />
    </main>
  );
}