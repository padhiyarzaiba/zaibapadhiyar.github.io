import "../styles/Skills.css";

function Skills() {
  return (
    <section id="skills">

      <div className="container">

        <h4 className="section-subtitle">
          MY SKILLS
        </h4>

        <h2 className="section-title">
          Technical Expertise
        </h2>

        {/* Mobile Development */}

        <div className="skill-category">

          <h3>📱 Mobile Development</h3>

          <div className="skill">

            <span>Android Development</span>
            <span>95%</span>

          </div>

          <div className="progress">

            <div className="progress-bar android"></div>

          </div>

          <div className="skill">

            <span>Flutter</span>
            <span>80%</span>

          </div>

          <div className="progress">

            <div className="progress-bar flutter"></div>

          </div>

          <div className="skill">

            <span>Kotlin</span>
            <span>85%</span>

          </div>

          <div className="progress">

            <div className="progress-bar kotlin"></div>

          </div>

          <div className="skill">

            <span>Java</span>
            <span>95%</span>

          </div>

          <div className="progress">

            <div className="progress-bar java"></div>

          </div>

        </div>

        {/* Backend */}

        <div className="skill-category">

          <h3>🔥 Backend & Database</h3>

          <div className="skill">

            <span>Firebase</span>
            <span>90%</span>

          </div>

          <div className="progress">

            <div className="progress-bar firebase"></div>

          </div>

          <div className="skill">

            <span>REST APIs</span>
            <span>95%</span>

          </div>

          <div className="progress">

            <div className="progress-bar api"></div>

          </div>

          <div className="skill">

            <span>Room Database</span>
            <span>80%</span>

          </div>

          <div className="progress">

            <div className="progress-bar room"></div>

          </div>

          <div className="skill">

            <span>SQLite</span>
            <span>85%</span>

          </div>

          <div className="progress">

            <div className="progress-bar sqlite"></div>

          </div>

        </div>

        {/* Tools */}

        <div className="tools">

          <h3>🛠 Tools & Technologies</h3>

          <div className="tool-grid">

            <div className="tool-card">Android Studio</div>
            <div className="tool-card">Flutter</div>
            <div className="tool-card">Java</div>
            <div className="tool-card">Kotlin</div>
            <div className="tool-card">Firebase</div>
            <div className="tool-card">Git</div>
            <div className="tool-card">GitHub</div>
            <div className="tool-card">Play Console</div>
            <div className="tool-card">VS Code</div>
            <div className="tool-card">Postman</div>
            <div className="tool-card">Jira</div>
            <div className="tool-card">Figma</div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;