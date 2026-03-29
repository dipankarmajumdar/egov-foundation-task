import logo from "../assets/logo.png";

const menu = [
  "About Us",
  "Areas of work",
  "Products & Solutions",
  "Our Platform",
  "Ecosystem",
  "Resources",
];

const Header = () => {
  return (
    <header className="sticky-top bg-white">
      <div className="d-flex justify-content-end align-items-center py-1 px-lg-5 px-3 border-bottom bg-white small fw-bold">
        <a
          className="text-decoration-none px-3 text-primary"
          style={{ fontSize: "13px" }}
          href="#"
        >
          Events
        </a>
        <a
          className="text-decoration-none px-3 text-primary"
          style={{ fontSize: "13px" }}
          href="#"
        >
          Contact us
        </a>
        <div
          className="d-flex align-items-center px-3"
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://flagcdn.com/w20/gb.png"
            alt="UK"
            className="me-2"
            style={{ width: "18px" }}
          />
          <span className="text-dark">ENG</span>
          <i className="bi bi-chevron-down ms-2 text-primary"></i>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container-fluid px-lg-5">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center fw-bold">
              {menu.map((item) => (
                <li key={item} className="nav-item px-2">
                  <a
                    className="nav-link text-dark d-flex align-items-center"
                    href="#"
                  >
                    {item}{" "}
                    <i
                      className="bi bi-chevron-down ms-2 text-info"
                      style={{ fontSize: "10px" }}
                    ></i>
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-3">
                <i className="bi bi-search fs-5"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
