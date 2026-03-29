import citizen_with_phone from "../assets/citizen_with_phone.jpeg";
import digit from "../assets/digit_logo.png";

const Digit = () => {
  return (
    <section className="position-relative bg-primary-navy text-white overflow-hidden py-5">
      <div className="position-absolute top-0 end-0 h-100 w-100 z-1 opacity-50">
        <img
          src={citizen_with_phone}
          className="h-100 w-100 object-fit-cover"
          alt="Digit"
        />
      </div>
      <div className="container position-relative z-2 py-5">
        <div className="col-lg-6">
          <img src={digit} className="mb-4" alt="Digit Logo" />
          <h2 className="display-4 fw-bold mb-4">
            Our open source <br /> technology-for-good platform
          </h2>
          <p className="opacity-75 mb-4">
            DIGIT helps governments deliver services at scale with speed and
            transparency.
          </p>
          <button className="btn btn-light rounded-pill px-4 py-2 fw-bold text-primary-navy shadow">
            Explore the platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default Digit;
