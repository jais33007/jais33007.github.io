import React from "react";
import "./Home.css";

function Home() {
    return (
      <div>
        {/* About Me Section */}
        <section className="about-me">
        <div className="container">
          <div className="about-content">
            {/* Profile Photo */}
            <div className="about-photo">
              <img src="/assets/profile.png" alt="Profile" />
              <h3>AI and Machine Learning Researcher</h3>

              {/* Social Media Links */}
              <div className="social-links">
                <a href="https://www.linkedin.com/in/jayasankar-santhosh-045194172/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://scholar.google.com/citations?user=your-profile" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-graduation-cap"></i>
                </a>
                <a href="https://github.com/jais33007" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.researchgate.net/profile/Jayasankar-Santhosh?ev=hdr_xprf" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-researchgate"></i>
                </a>
              </div>
            </div>
            {/* About Text */}
            <div className="about-text">
              <h1>Jayasankar Santhosh</h1>
              
              <h3>German Research Center for Artificial Intelligence (DFKI) | SDS Dept | IQL Lab</h3>
              <p className="bio">
                I am a passionate researcher specializing in <strong>Machine Learning</strong>, <strong>Multimodal Sensor Analytics</strong>, and <strong>Generative AI (GenAI)</strong> to enhance learning experiences.
                Experienced in designing <strong>experimental interfaces</strong>, <strong>real-time data pipelines</strong>, and <strong>advanced models</strong> for eye-tracking and adaptive systems.
                Expertise in <strong>Educational Data Mining</strong>, <strong>Affective Computing</strong>, <strong>Human-Computer Interaction</strong>, <strong>Real-Time Data Processing</strong>, and <strong>Designing adaptive learning interfaces</strong>.
                Member of&nbsp;
                  <a
                    href="https://www.dfki.de/web/anwendungen-industrie/living-labs/immersive-quantified-learning-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Immersive Quantified Learning (IQL) Lab</strong>
                  </a>
                  &nbsp;at DFKI and&nbsp;
                  <a
                    href="https://www.psyberlab.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Psybernetics Lab</strong>
                  </a>
                  &nbsp;at RPTU.
                <br />
                <br />
                My research interests include understanding the effects of adaptive systems on user outcomes, with the goal of developing scalable, trustworthy, effective, and personalized technologies that enhance experiences across diverse domains.
                </p>
            </div>
          </div>
        </div>
      </section>


      {/* Work Experience Section */}
      <section className="work-experience">
        <div className="container">
          <h2>Work Experience</h2>
          <ul className="experience-list">
            <li className="experience-item">
              <h3>Research Scientist (PhD)</h3>
              <span className="company-year">DFKI Kaiserslautern | 2019 - Present</span>
            </li>
            <li className="experience-item">
              <h3>University Teaching Assistant</h3>
              <span className="company-year">RPTU Kaiserslautern-Landau | 2022 - 2023</span>
            </li>
            <li className="experience-item">
              <h3>Research Assistant</h3>
              <span className="company-year">DFKI Kaiserslautern | 2017 - 2019</span>
            </li>
            <li className="experience-item">
              <h3>Student Intern</h3>
              <span className="company-year">Soften Technologies, Kerala, India | 2014</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <div className="container">
          <h2>Education</h2>
          <ul className="education-list">
            <li className="education-item">
              <h3>PhD in AI-based Learning-Analytics (Submitted)</h3>
              <span className="institution-year">RPTU Kaiserslautern-Landau | 2020 - Present</span>
            </li>
            <li className="education-item">
              <h3>Master's in Computer Science</h3>
              <span className="institution-year">RPTU Kaiserslautern-Landau | 2015 - 2018</span>
            </li>
            <li className="education-item">
              <h3>Bachelor's in Computer Science</h3>
              <span className="institution-year">Mahatma Gandhi University, Kerala, India | 2010 - 2014</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Supervision Section */}
      <section className="honors">
        <div className="container">
          <h2>Master Thesis Supervision</h2>
          <ul className="honors-list">
            <li className="honors-item">
              <h3>Gitesh Gund, "Integrating Eye Tracking and Deep Learning for Enhanced Lecturer Feedback and Student's Comprehension In Online Video Education"</h3>
              <span className="supervision-year">2025</span>
            </li>
            <li className="honors-item">
              <h3>Ankur Bhatt, "Estimating Self-Confidence by Deep Neural Networks and Eye Movements While Watching Learning Materials"</h3>
              <span className="supervision-year">2025</span>
            </li>
            <li className="honors-item">
              <h3>Gizem Öskürci, "Accommodating BCI Illiteracy through Fatigue-dependent Learning Assistance" (co-supervision)</h3>
              <span className="supervision-year">2024</span>
            </li>
            <li className="honors-item">
              <h3>Rashmi Alur Ramachandra, "User Stress Levels Detection by Physiological Sensing and Deep Learning"</h3>
              <span className="supervision-year">2023</span>
            </li>
            <li className="honors-item">
              <h3>Prerna Garg, "A Survey and Evaluation of Sensor Based Multimodal Physiological Datasets for Stress Detection"</h3>
              <span className="supervision-year">2021</span>
            </li>
            <li className="honors-item">
              <h3>Pramod Vadiraja, "Leveraging Machine Learning to Improve Comprehension by Content Personalization Based on the Cognitive State of the Reader" (co-supervision)</h3>
              <span className="supervision-year">2021</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="container">
          <h2>Reviews</h2>
          <ul className="reviews-list">
            <li className="reviews-item">ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp/ISWC)
                <a 
              href="https://dl.acm.org/doi/proceedings/10.1145/3544793" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              2022
            </a>, 
            <a 
              href="https://dl.acm.org/doi/proceedings/10.1145/3594739" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              2023
            </a>, 
            <a 
              href="https://dl.acm.org/doi/proceedings/10.1145/3675095" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              2024
            </a>
            </li>
            <li className="reviews-item">Augmented Humans (AHs) International Conference
              <a 
                href="https://dl.acm.org/doi/proceedings/10.1145/3582700" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                2023
              </a>, 
              <a 
                href="https://dl.acm.org/doi/proceedings/10.1145/3652920" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                2024
              </a>
             </li>
            <li className="reviews-item">Conference on Human Factors in Computing Systems (CHI)
              <a
                href="https://chi2025.acm.org/" 
                target="_blank" 
                rel="noopener noreferrer"
              >  
                2025
              </a>
            </li>
            <li className="reviews-item">The Journal of Supercomputing,
              <a
                href="https://link.springer.com/journal/11227" 
                target="_blank" 
                rel="noopener noreferrer"

              > 
              Link
              </a>         
              </li>
            <li className="reviews-item">Forum for Education Studies,
              <a
              href="https://ojs.acad-pub.com/index.php/FES"
              target="_blank"
              rel="noopener noreferrer"
              >
              Link
              </a>
            </li>
            <li className="reviews-item">ShodhKosh: Journal of Visual and Performing Arts,
              <a
              href="https://www.granthaalayahpublication.org/Arts-Journal/ShodhKosh/index"
              target="_blank"
              rel="noopener noreferrer"
              >
              Link
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;

