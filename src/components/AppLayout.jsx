import Logo from "./Logo";

export default function AppLayout({ children }) {
  return (
    <main className="page-layout">
      <header className="page-header">
        <Logo />
      </header>

      <section className="page-content">{children}</section>
    </main>
  );
}