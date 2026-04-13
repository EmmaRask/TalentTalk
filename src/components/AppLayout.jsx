import Logo from "./Logo";
import { useState } from "react";
import DrinkbookDrawer from "./DrinkbookDrawer";

// export default function AppLayout({ children }) {
//   return (
//     <main className="page-layout">
//       <header className="page-header">
//         <Logo />
//       </header>

//       <section className="page-content">{children}</section>
//     </main>
//   );
// }

export default function AppLayout({ children }) {
  const [isDrinkbookOpen, setIsDrinkbookOpen] = useState(false);

  return (
    <main className="page-layout">
      <header className="page-header">
        <Logo />
        <button onClick={() => setIsDrinkbookOpen(true)}>
          Drinkbook
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