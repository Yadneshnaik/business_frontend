export default function NavbarComp() {
  return (
    <nav className="navbar navbar-expand-lg px-3 bg-transparent">
      <a className="navbar-brand fw-bold text-dark" href="/">
        Vista Developer
      </a>

     <div className="collapse navbar-collapse" id="navBar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link purple-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link purple-link" href="/services">Services</a></li>
          <li className="nav-item"><a className="nav-link purple-link" href="/about">About</a></li>
          <li className="nav-item"><a className="nav-link purple-link" href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
