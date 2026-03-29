import logo from "../assets/logo.png";

const Footer = () => {
  const links = {
    col1: ["Home", "Our Impact", "DIGIT Sandbox"],
    col2: ["Our People", "Financials", "Contact Us"],
  };

  return (
    <footer className="footer-area pt-5" style={{ backgroundColor: "#e9f2f9" }}>
      <div className="container pb-5">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4">
            <img src={logo} alt="eGov" className="mb-4" />
            <p className="footer-desc">
              Catalysing digital transformation in public service delivery at
              speed & scale.
            </p>
            {/* Social Links Mapping */}
            <div className="d-flex gap-2">
              {["facebook", "twitter-x", "linkedin", "youtube"].map(
                (social) => (
                  <a key={social} href="#" className="social-circle">
                    <i className={`bi bi-${social}`}></i>
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <h5 className="footer-title mb-4">Useful Links</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  {links.col1.map((link) => (
                    <li key={link} className="mb-3">
                      <a
                        href="#"
                        className="text-decoration-none text-primary-navy"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  {links.col2.map((link) => (
                    <li key={link} className="mb-3">
                      <a
                        href="#"
                        className="text-decoration-none text-primary-navy"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <h5 className="footer-title mb-4">Subscribe Now</h5>
            <div className="newsletter-wrapper position-relative">
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder="Enter Email"
              />
              <button className="btn btn-orange-sq position-absolute top-0 end-0 h-100 rounded-end-pill">
                <i className="bi bi-envelope-paper"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Blue Bottom Bar */}
      <div
        className="footer-bottom py-3 text-white"
        style={{ backgroundColor: "#1b75bb" }}
      >
        <div className="container text-center text-md-start d-md-flex justify-content-between">
          <p className="mb-0 small">©2024. eGov. All Rights Reserved.</p>
          <div>
            <a href="#" className="text-white small me-3">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
