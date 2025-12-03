import "./AboutExperience.css";

export default function AboutExperience() {
  return (
    <section className="experience-wrapper">
      <div className="experience-container">
        
        <div className="experience-header">
          <span className="sub-title">ABOUT EXPERIENCE</span>
          <h2>We Have Close To 10 Years Experience <br/> in Facility Management</h2>
        </div>

        <div className="experience-grid">

          <div className="exp-item">
            <div className="exp-icon">
              <img src="/assets/icons/quality.png" alt="Quality Services" />
            </div>
            <h3>Quality Services</h3>
            <p>
              Heavy focus is put to delivering quality services.
            </p>
          </div>

          <div className="exp-item">
            <div className="exp-icon">
              <img src="/assets/icons/team.png" alt="Professional Team" />
            </div>
            <h3>Professional Team</h3>
            <p>
              We have curated a team of well-trained professionals ensuring smooth operations.
            </p>
          </div>

          <div className="exp-item">
            <div className="exp-icon">
              <img src="/assets/icons/support.png" alt="Support" />
            </div>
            <h3>Ongoing Support</h3>
            <p>
              We prioritize follow-ups and ongoing customer support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
