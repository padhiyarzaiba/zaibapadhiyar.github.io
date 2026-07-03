import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience">

      <div className="container">

        <h4 className="section-subtitle">
          EXPERIENCE
        </h4>

        <h2 className="section-title">
          Professional Journey
        </h2>

        <div className="timeline">

        {/* Experience 1 */}

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-content">

    <span className="timeline-date">
      Sep 2025 – Present
    </span>

    <h3>Senior Software Development Engineer (SDE)</h3>

    <h4>Grow Indigo Private Limited</h4>

    <p>
      Leading the development of enterprise-grade Flutter and Android
      applications. Architecting scalable mobile solutions, implementing
      Aadhaar verification, biometric authentication, payment integration,
      APK release management, and collaborating with cross-functional teams
      to deliver secure, high-performance applications.
    </p>

    <div className="tech-tags">
      <span>Flutter</span>
      <span>Android</span>
      <span>Java</span>
      <span>MVVM</span>
      <span>Firebase</span>
      <span>Payment Gateway</span>
      <span>Aadhaar eKYC</span>
    </div>

  </div>

</div>

        {/* Experience 2 */}

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-content">

    <span className="timeline-date">
      Aug 2022 – Aug 2025
    </span>

    <h3>Android Developer</h3>

    <h4>Grow Indigo Private Limited</h4>

    <p>
      Designed, developed and maintained native Android applications using
      Java and MVVM architecture. Built reusable components, integrated
      third-party SDKs, optimized application performance, and delivered
      secure, user-friendly mobile solutions.
    </p>

    <div className="tech-tags">
      <span>Android</span>
      <span>Java</span>
      <span>MVVM</span>
      <span>REST API</span>
      <span>SQLite</span>
      <span>Git</span>
    </div>

  </div>

</div>
        {/* Experience 3 */}l̥

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-content">

    <span className="timeline-date">
      Jan 2022 – Jun 2022
    </span>

    <h3>Android Developer</h3>

    <h4>Streamspace AI Corporation</h4>

    <p>
      Developed Android applications using Java and Kotlin. Implemented
      video calling, real-time chat, and modern Android features while
      building scalable and high-performance mobile applications.
    </p>

    <div className="tech-tags">
      <span>Android</span>
      <span>Java</span>
      <span>Kotlin</span>
      <span>Video Calling</span>
      <span>Chat</span>
      <span>Firebase</span>
    </div>

  </div>

</div>
{/* Experience 4 */}

<div className="timeline-item">

  <div className="timeline-dot"></div>

  <div className="timeline-content">

    <span className="timeline-date">
      Oct 2017 – Apr 2021
    </span>

    <h3>Operation Executive</h3>

    <h4>SBI Card Pvt. Ltd. (Quess Corp Limited)</h4>

    <p>
      Verified credit card applications through background verification,
      ensuring compliance with banking regulations and maintaining high
      standards of operational accuracy and customer service.
    </p>

    <div className="tech-tags">
      <span>Operations</span>
      <span>Verification</span>
      <span>Compliance</span>
      <span>Customer Support</span>
    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}

export default Experience;