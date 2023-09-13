import "./assets/css/header.css";

function Header() {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img alt="" className="logo" />
      <ul className="nav-list"></ul>
    </nav>
  );
}

export default Header;
