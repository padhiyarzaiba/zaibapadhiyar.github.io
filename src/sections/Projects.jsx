import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">

      <div className="container">

        <h4 className="section-subtitle">
          MY PROJECTS
        </h4>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="projects-grid">

          {/* Project 1 */}

          <div className="project-card">

            <h3>💬 Chatic</h3>

            <p>
              Real-time communication application for a US client supporting
              one-to-one chat, voice calls and video calls using WebRTC.
              Similar to WhatsApp with secure messaging and media sharing.
            </p>

            <div className="project-tags">
              <span>Kotlin</span>
              <span>WebRTC</span>
              <span>Chat</span>
              <span>Video Call</span>
            </div>

          </div>

          {/* Project 2 */}

          <div className="project-card">

            <h3>🌾 Grow Online</h3>

            <p>
              Agriculture marketplace connecting farmers and retailers.
              Farmers can list crops while retailers purchase products.
              Includes rewards, cart, orders, profile management and product
              catalog.
            </p>

            <div className="project-tags">
              <span>Android</span>
              <span>Java</span>
              <span>MVVM</span>
              <span>REST API</span>
            </div>

          </div>

          {/* Project 3 */}

          <div className="project-card">

            <h3>🌱 Field Khata</h3>

            <p>
              Mobile application helping field partners onboard farmers into
              carbon farming programs with digital verification, surveys and
              reward tracking.
            </p>

            <div className="project-tags">
              <span>Java</span>
               <span>OCR</span>
              <span>Android</span>
              <span>Firebase</span>
               <span>REST API</span>
            </div>

          </div>

          {/* Project 4 */}

          <div className="project-card">

            <h3>🏪 Udhyog Sahayak</h3>

            <p>
              Retailer loyalty application featuring wallet management,
              reward points, festival bonus schemes, Razorpay payment,
              transaction history and product catalog.
            </p>

            <div className="project-tags">
              <span>Flutter</span>
              <span>Razorpay</span>
              <span>Wallet</span>
              <span>Rewards</span>
            </div>

          </div>

          {/* Project 5 */}

          <div className="project-card">

            <h3>📦 S3 Sutra Traceability</h3>

            <p>
              Enterprise traceability platform providing Aadhaar verification,
              OCR document scanning, digital signatures and survey management
              for transparent supply chain operations.
            </p>

            <div className="project-tags">
              <span>Flutter</span>
              <span>OCR</span>
              <span>Aadhaar</span>
              <span>eSign</span>
            </div>

          </div>

          {/* Project 6 */}

          <div className="project-card">

            <h3>🚚 FytoTrace</h3>

            <p>
              Multi-level supply chain traceability solution allowing
              organizations to manage transactions, documentation,
              Aadhaar verification and complete traceability reports.
            </p>

            <div className="project-tags">
              <span>Flutter</span>
              <span>Supply Chain</span>
              <span>QR</span>
              <span>Reports</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;