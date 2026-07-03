import "../styles/Contact.css";

function Contact() {

  return (

    <section id="contact">

      <div className="container">

        <h4 className="section-subtitle">
          CONTACT
        </h4>

        <h2 className="section-title">
          Let's Connect
        </h2>

        <div className="contact-box">

          <div className="contact-item">

            <h3>📧 Email</h3>

            <p>
              <a href="mailto:zaibakazi7111@gmail.com">
                zaibakazi7111@gmail.com
              </a>
            </p>

          </div>

          <div className="contact-item">

            <h3>📱 Phone</h3>

            <p>
              <a href="tel:+917984744313">
                +91 7984744313
              </a>
            </p>

          </div>

          <div className="contact-item">

            <h3>💼 LinkedIn</h3>

            <p>
              <a
                href="https://linkedin.com/in/zaiba-padhiyar-6aa897223"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/zaiba-padhiyar-6aa897223
              </a>
            </p>

          </div>

          <div className="contact-item">

            <h3>💻 GitHub</h3>

            <p>
              <a
                href="https://github.com/zaibapadhiyar"
                target="_blank"
                rel="noreferrer"
              >
                github.com/zaibapadhiyar
              </a>
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;