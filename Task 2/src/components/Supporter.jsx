import { SUPPORTER } from "../data/mockData";

const Supporter = () => {
  return (
    <section class="supporters-section py-5 bg-white border-top">
      <div class="container py-4">
        <p class="mb-5 ls-2 h2">
          Our <span class="fw-bold h1">Supporters</span>
        </p>

        <div className="row align-items-center justify-content-between g-4 logo-grid">
          {SUPPORTER.map((logo) => (
            <div className="col-6 col-md-2" key={logo.id}>
              <img
                src={logo.src}
                alt={`Supporter ${logo.id}`}
                className="img-fluid grayscale-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporter;
