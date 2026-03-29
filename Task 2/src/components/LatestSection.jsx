import { useState, useEffect } from "react";
import { LATEST_ARTICLES, CATEGORIES } from "../data/mockData";

const LatestSection = () => {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState("What's New");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API call simulation
    setTimeout(() => {
      setArticles(LATEST_ARTICLES);
      setLoading(false);
    }, 800);
  }, []);

  // Filter Logic: "What's New" hole shob dekhabe, onnotay category match korbe
  const filteredArticles = articles.filter((item) => {
    return activeCategory === "What's New" || item.category === activeCategory;
  });

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="mt-3 text-muted">Loading Latest Updates...</h3>
      </div>
    );

  return (
    <section className="latest-section py-5">
      <div className="container py-5">
        <h2 className="text-primary-navy mb-4">
          Latest at <span className="text-accent-cyan fw-bold h1">eGov</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="d-flex flex-wrap gap-4 mb-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`btn ${activeCategory === cat ? "btn-pill-active" : "btn-pill-outline"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Results Grid */}
        <div className="row g-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className="col-lg-4 col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden article-card">
                  <div className="position-relative">
                    <img
                      src={article.image}
                      className="card-img-top"
                      alt={article.title}
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-primary-navy mb-3">
                      {article.title}
                    </h5>
                    <p className="small text-muted mb-4">
                      <i className="bi bi-person me-1"></i> {article.author}
                      <span className="mx-2">|</span>
                      <i className="bi bi-calendar3 me-1"></i> {article.date}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      {article.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="badge bg-light text-muted border rounded-pill px-3"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // No Results State
            <div className="col-12 text-center py-5">
              <p className="fs-5 text-muted">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>

        {LATEST_ARTICLES?.length >= 3 && (
          <div className="mt-5 text-center text-md-start">
            <button className="btn btn-cyan rounded-pill px-5 py-2 shadow-sm">
              See all
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestSection;
