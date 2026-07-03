import "../styles/About.css";

function About() {
  return (
    <section id="about">

      <div className="container">

        <h4 className="section-subtitle">
          ABOUT ME
        </h4>

        <h2 className="section-title">
          Know More About Me
        </h2>

        <div className="about-container">

          {/* Left */}

          <div className="about-left">

            <div className="about-image">

              <div className="about-circle">
                ZP
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="about-right">

            <h3>

              Senior Android Developer

            </h3>

            <p>

              Senior Software Development Engineer with over
              4+ years of experience in Android and Flutter
              development. Passionate about building scalable,
              secure and high-performance mobile applications.

            </p>

            <div className="about-list">

              <div>✔ Android Development</div>

              <div>✔ Flutter Development</div>

              <div>✔ Kotlin</div>

              <div>✔ Java</div>

              <div>✔ Firebase</div>

              <div>✔ REST API Integration</div>

              <div>✔ MVVM Architecture</div>

              <div>✔ Google Maps</div>

            </div>

          </div>

        </div>

      </div>
<div className="stats">

  <div className="stat-card">
    <h2>4+</h2>
    <p>Years Experience</p>
  </div>

  <div className="stat-card">
    <h2>10+</h2>
    <p>Projects Completed</p>
  </div>

  <div className="stat-card">
    <h2>3</h2>
    <p>Companies</p>
  </div>

  <div className="stat-card">
    <h2>15+</h2>
    <p>Apps Delivered</p>
  </div>

</div>
    </section>
  );
}

export default About;