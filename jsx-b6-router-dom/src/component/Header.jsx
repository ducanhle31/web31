import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1 className="logo">Logo</h1>
      </div>

      <Navigation />
    </header>
  );
}
