import hero from "../assets/hero_image.jpeg";

const Hero = () => {
  return (
    <section
      className="hero-section position-relative d-flex align-items-center bg-white"
      style={{ minHeight: "90vh" }}
    >
      <div
        className="hero-bg-overlay position-absolute w-100 h-100 overflow-hidden"
        style={{ top: 0, right: 0, zIndex: 1 }}
      >
        <img
          src={hero}
          className="position-absolute h-100 w-100 object-fit-cover"
          alt="Hero"
          style={{ objectPosition: "right center" }}
        />
      </div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="col-lg-6 py-5">
          <h1 className="display-3 text-primary-navy mb-3">
            20 years of digital transformation in public service delivery
          </h1>
          <h2 className="display-4 fw-bold text-primary-navy mb-4">
            It's possible.
          </h2>
          <p className="col-lg-10 mb-5 text-muted">
            Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we're
            driven by the power of open digital infrastructure to enable
            inclusive services.
          </p>
          <div className="d-flex gap-3">
            <button className="btn btn-cyan btn-lg rounded-pill shadow px-4">
              Our Approach
            </button>
            <button className="btn btn-outline-primary btn-lg rounded-pill px-4">
              Our Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
