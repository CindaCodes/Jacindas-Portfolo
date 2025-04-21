import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section min-vh-100 align-items-center"
    >
      <h2 className="title">📬 Get in Touch</h2>
      <p>
        I'm excited to connect! Whether you have a question, a project idea, or
        just want to say hello, feel free to reach out.
      </p>
      <div className="contact-container">
        <form
          action="https://formspree.io/f/movjgbpq"
          method="POST"
          className="contact-form"
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="_replyto" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <h3>📫 Contact Details</h3>
          <p>
            Email:{" "}
            <a href="mailto:cinda.codes@gmail.com">cinda.codes@gmail.com</a>
          </p>
          <p>Location: Fort Collins, CO</p>
          <div className="social-links">
            <div className="d-flex justify-content-between ms-5 gap-5">
              <a
                href="https://github.com/CindaCodes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/jacinda-bietz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
