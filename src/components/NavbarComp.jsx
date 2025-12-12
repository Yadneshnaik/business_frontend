export default function NavbarComp() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-3">
      
      {/* Brand Logo / Name */}
      <a className="navbar-brand fw-bold text-dark" href="/">
        Vista Developer
      </a>

      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navBar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navBar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link purple-link" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link purple-link" href="/services">Services</a>
          </li>

          <li className="nav-item">
            <a className="nav-link purple-link" href="/about">About</a>
          </li>

          <li className="nav-item">
            <a className="nav-link purple-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  );
}
