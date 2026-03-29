import stat_logo from "../assets/stat_image.jpeg";
import bed from "../assets/ICU_Bed.png";
import syringe from "../assets/syringe.png";

const Stats = () => {
  return (
    <section className="stats-container position-relative">
      <div
        className="stats-bg-wrapper position-relative text-white overflow-hidden"
        style={{ minHeight: "500px" }}
      >
        <img
          src={stat_logo}
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0 z-n1"
          alt="Stats BG"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 z-n1"></div>

        <div
          className="container d-flex flex-column justify-content-between py-4"
          style={{ minHeight: "500px" }}
        >
          <div className="row pt-2">
            <div className="col-md-8">
              <h1 className="display-1 mb-0" style={{ letterSpacing: "-2px" }}>
                1,000,000,100+
              </h1>
            </div>
            <div class="col-md-4 align-self-start pt-3">
              <p class="small mb-0">
                Citizens availing public services through eGov's <br />
                Digital Public Goods (DPG)
              </p>
            </div>
          </div>
          <div class="row pb-5 text-center">
            <div class="col-md-3 ms-md-5">
              <h2 class="h2">1.1 Billion+</h2>
              <p class="small opacity-75">Public services delivered</p>
            </div>
            <div class="col-md-3 ms-md-5 text-center">
              <h2 class="h2">50+ partners</h2>
              <p class="small opacity-75">
                From technology, <br />
                governments and NGOs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Card */}
      <div
        className="container"
        style={{ marginTop: "-70px", position: "relative", zIndex: 10 }}
      >
        <div className="card border-0 shadow-lg rounded-4 p-5 bg-white">
          <div className="row g-4">
            <div className="col-lg-4">
              <h2 class="text-primary-navy">
                Big problems need <br />
                <span class="text-accent-cyan tw-bold">bold approaches</span>
              </h2>
              <div className="d-grid gap-2 mt-4">
                <button
                  class="btn rounded-pill px-5"
                  style={{ backgroundColor: "#00b5c2", color: "white" }}
                >
                  Public Health
                </button>
                {[
                  "Public Finance",
                  "Local Governance",
                  "Water & Sanitation",
                ].map((txt) => (
                  <button className="btn btn-outline-custom rounded-pill px-5">
                    {txt}
                  </button>
                ))}
              </div>
            </div>
            {/* Feature Cards */}
            <div className="col-lg-4">
              <div
                className="card h-100 border-0 rounded-4 p-4 text-white"
                style={{ backgroundColor: "#00b5c2" }}
              >
                <h3 className="fw-bold">210+</h3>
                <p className="small text-black col-md-5">
                  cities LIVE with 10BedICU across India
                </p>
                <button class="btn btn-light btn-sm rounded-pill px-3 mt-2 w-50">
                  Read More
                </button>
                <img
                  src={bed}
                  className="img-fluid mt-2 ms-auto d-block"
                  alt="ICU"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card h-100 border-0 rounded-4 p-4 text-white"
                style={{ backgroundColor: "#2f80ed" }}
              >
                <h3 className="fw-bold">2 Bn</h3>
                <p class="small text-black col-md-5">
                  COVID-19 vaccination certificates issued
                </p>
                <button class="btn btn-light btn-sm rounded-pill px-3 mt-2 w-50">
                  Read More
                </button>
                <img
                  src={syringe}
                  className="img-fluid mt-2 ms-auto d-block"
                  alt="Syringe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
