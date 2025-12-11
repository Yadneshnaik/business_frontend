export default function NavbarComp() {
  return (
    <nav className="navbar navbar-expand-lg px-3 bg-transparent">
      <a className="navbar-brand fw-bold text-dark" href="/">
        Vista Developer
      </a>

      <div className="collapse navbar-collapse show" id="navBar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link text-dark" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark" href="/services">Services</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark" href="/about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-dark" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
