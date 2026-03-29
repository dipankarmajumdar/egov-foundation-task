import speaker_1 from "../assets/speaker_1.png";
import speaker_2 from "../assets/speaker_2.png";

const Reimagining = () => {
  return (
    <section class="reimagining-section mt-5 py-5 bg-white">
      <div class="container text-center py-5">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2 class="h1 fw-normal text-muted mb-0">
              20 years of reimagining for citizens and
            </h2>
            <h2 class="display-5 fw-bold text-primary-navy mb-4">
              <span class="position-relative">
                sustaining change
                <span class="custom-underline"></span>
              </span>
            </h2>

            <p class="text-muted fs-6">
              Technology is powerful, but it is only one piece of the puzzle,
              when it comes to enhancing the quality of life for every citizen.
              To have sustainable impact at scale, the collective energy of
              local networks to solve local problems need to be tapped into. Our
              partners & networks brieng this collective energy to life. The
              ecosystem already exist; our task is to fecilitate and amplify
              their efforts. For 20 years, we've been turing small steps into
              lasting, meaningful change, so that no citizen is left behind.
            </p>
          </div>
        </div>

        <div class="row g-4 mt-5 justify-content-center">
          <div class="col-md-5">
            <div class="card border-0 shadow-sm rounded-4 overflow-hidden position-relative video-card">
              <img
                src={speaker_1}
                class="card-img-top cursor-pointer"
                alt="Speaker 1"
              />
            </div>
          </div>
          <div class="col-md-5">
            <div class="card border-0 shadow-lg rounded-4 overflow-hidden position-relative video-card">
              <img
                src={speaker_2}
                class="card-img-top cursor-pointer"
                alt="Speaker 2"
              />
            </div>
          </div>
        </div>

        <div class="mt-5">
          <button class="btn btn-outline-custom rounded-pill px-4">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reimagining;
