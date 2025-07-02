function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-expand-sm bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Mixes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
