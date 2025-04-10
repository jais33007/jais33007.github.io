import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact</h2>
        <p>
          I am always open to professional inquiries, collaborations, or any questions you may have. Feel free to reach out to me via the following email addresses:
        </p>
        <ul>
          <li>
            <strong>Official Email:</strong> <a href="mailto:jayasankar.santhosh@dfki.de">jayasankar.santhosh@dfki.de</a>
          </li>
          <li>
            <strong>Personal Email:</strong> <a href="mailto:jais33007@gmail.com">jais33007@gmail.com</a>
          </li>
        </ul>
        <p>
          Alternatively, you can connect with me on <a href="https://www.linkedin.com/in/jayasankar-santhosh-045194172/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://www.xing.com/profile/Jayasankar_Santhosh/web_profiles" target="_blank" rel="noopener noreferrer"> Xing</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;