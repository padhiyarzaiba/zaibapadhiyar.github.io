import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        {/* Left Side */}

        <div className="hero-left">

          <p className="hero-tag">
            👋 Hello, I'm
          </p>

          <h1>
            Zaiba <span>Padhiyar</span>
          </h1>

          <h2>
            Senior Android Developer
          </h2>

          <p className="hero-description">

            Passionate Android & Flutter Developer with 4+ years of experience
            building secure, scalable and high-performance mobile applications.

          </p>

          <div className="tech-stack">

            <span>Android</span>

            <span>Flutter</span>

            <span>Kotlin</span>

            <span>Java</span>

            <span>Firebase</span>

          </div>

          <div className="hero-buttons">

            <button className="btn-primary">

              Download Resume

            </button>

            <button className="btn-outline">

              Contact Me

            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-right">

          <div className="profile-card">

            <div className="profile-circle">

              ZP

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;