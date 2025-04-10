import React from "react";
import "./Publications.css";

function Publications() {
  const publications = [
    {
      title: "Gaze-Driven Adaptive Learning System With ChatGPT-Generated Summaries",
      description: "This study integrates real-time gaze-based engagement prediction with an adaptive learning system using ChatGPT-generated summaries. Experiments with 22 students showed improved engagement, comprehension, and learning outcomes, with Transformer models achieving 68.15% accuracy in engagement prediction. The results highlight the potential of AI-driven adaptive interventions in enhancing educational experiences.",
      image: "/assets/ALS.mp4",
      link: "https://ieeexplore.ieee.org/abstract/document/10758626",
    },
    {
      title: "Toward an Interactive Reading Experience: Deep learning Insights and Visual Narratives of Engagement and Emotion",
      description: "Deep learning models are used to detect engagement and emotions during reading tasks, analyzing data from 18 students using eye-tracking and physiological sensors. Transformers achieved 80.38% accuracy in user-independent engagement detection, while ResNet excelled in user-dependent settings with 93.56% accuracy. Strong correlations between engagement and emotions were observed, and an interactive dashboard was developed to provide real-time feedback and personalized learning insights..",
      image: "/assets/Engagement gauge.png", 
      link: "https://ieeexplore.ieee.org/abstract/document/10382515",
    },
    {
      title: "Enhancing Stress Detection for Students: Exploring the Impact of Fine-Tuning and User-Specific Data Calibration in Deep Learning",
      description: "This research uses physiological sensing to analyze stress levels in educational settings. A study with 25 participants employed deep learning models (FCN, ResNet, LSTM) to classify stress into three levels (easy, medium, hard), achieving up to 91% accuracy. A prototype app visualizes stress levels and provides personalized alerts for timely support.",
      image: "/assets/Stress.png", 
      link: "https://doi.org/10.60401/ijabc.11",
    },
    {
      title: "Digital Distractions in Reading: Investigating Impact of Cognitive Control Training on Reading Behavior and Outcomes",
      description: "This study examines the impact of notifications and pop-ups on reading comprehension, eye movements, and reader experience. Experiments with 22 participants revealed significant disruptions to reading flow, reduced comprehension, and increased frustration. Cognitive control training improved comprehension in distracted environments, highlighting the need for strategies to manage notifications and enhance digital reading interfaces.",
      image: "/assets/Distraction.png", 
      link: "https://dl.acm.org/doi/abs/10.1145/3675094.3677591",
    },
    {
      title: "Generating Heatmap for Unknown Documents towards Readability Measurement",
      description: "This study proposes generating fixation heatmaps for unknown documents to visualize focus areas as a step toward measuring readability. Using data from nine participants reading 15 documents, a Random Forest Regression model predicted fixation durations per word, achieving a mean R² score of 0.757.",
      image: "/assets/Heatmap.png", 
      link: "https://dl.acm.org/doi/abs/10.1145/3379336.3381495",
    },
    
  ];

  return (
    <section className="publications">
      <div className="container">
        <h2>Projects</h2>
        <div className="publication-grid">
          {publications.map((pub, index) => (
            <div className="publication-item" key={index}>
              <div className="publication-media">
                {/* Check if the media is a video or an image */}
                {pub.image.endsWith(".mp4") ? (
                  <video controls width="100%">
                    <source src={pub.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={pub.image} alt={pub.title} />
                )}
              </div>
              <div className="publication-content">
                <h3>{pub.title}</h3>
                <p>{pub.description}</p>
                <a href={pub.link} className="btn" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

      {/* Publications Section */}
        <h2>Publications</h2>
        <div className="publications-list">
          {/* Journal Papers */}
          <h3>Journal Papers</h3>
          <ol>
          <li>
              Ankur Bhatt, Ko Watanabe, Jayasankar Santhosh, Andreas Dengel, and Shoya
              Ishimaru. "ABCDE: Appearance-Based Confidence Detection by Evaluating Gaze
              Behavior Using Deep Learning". <em>International Journal of Activity and Behavior
              Computing, IJABC (2025)</em> , 2025, to appear.
            </li>
            <li>
              Jayasankar Santhosh, Andreas Dengel, and Shoya Ishimaru. “Gaze-Driven Adaptive
              Learning System with ChatGPT-Generated Summaries”. <em>IEEE Access</em>, pp. 173714–173733, 2024.
            </li>
            <li>
              Jayasankar Santhosh, Akshay Palimar Pai, and Shoya Ishimaru. “Toward an Interactive
              Reading Experience: Deep Learning Insights and Visual Narratives of Engagement
              and Emotion”. <em>IEEE Access</em>, pp. 6001–6016, 2024.
            </li>
            <li>
              Jayasankar Santhosh, David Dzsotjan, and Shoya Ishimaru. “Multimodal Assessment
              of Interest Levels in Reading: Integrating Eye-Tracking and Physiological Sensing”.
              <em>IEEE Access</em>, pp. 93994–94008, 2023.
            </li>
            <li>
              Rashmi Alur Ramachandra, Jayasankar Santhosh, Andreas Dengel, and Shoya
              Ishimaru. “Enhancing Stress Detection for Students: Exploring the Impact of Fine-
              Tuning and User-Specific Data Calibration in Deep Learning”. <em>International Journal of
              Activity and Behavior Computing</em>, 2024 (1), pp. 1–15, 2024.
            </li>
            <li>
              Ankur Bhatt, Ko Watanabe, Jayasankar Santhosh, Andreas Dengel, and Shoya
              Ishimaru. “Estimating Self-Confidence in Video-Based Learning Using Eye-Tracking
              and Deep Neural Networks”. <em>IEEE Access</em>, pp. 192219–192229, 2024.
            </li>
          </ol>

          {/* Conference Papers */}
          <h3>Conference Papers</h3>
          <ol>
            <li>
              Jayasankar Santhosh, Shrishti Jagtap, Andreas Dengel, and Shoya Ishimaru. 2024.
              “Digital Distractions in Reading: Investigating Impact of Cognitive Control Training on
              Reading Behavior and Outcomes”. In <em>Companion of the 2024 on ACM International
              Joint Conference on Pervasive and Ubiquitous Computing (UbiComp '24)</em>, pp. 91–95, 2024.
            </li>
            <li>
              Akshay Palimar Pai, Jayasankar Santhosh, and Shoya Ishimaru. "Real-Time Feedback on
              Reader’s Engagement and Emotion Estimated by Eye-Tracking and Physiological
              Sensing”. In <em>Proceedings of the 2022 ACM International Joint Conference on
              Pervasive and Ubiquitous Computing: Adjunct Publication (UbiComp ’22 Adjunct)</em>, pp.
              97–98, 2022.
            </li>
            <li>
              Pramod Vadiraja, Jayasankar Santhosh, Hanane Moulay, Andreas Dengel, and Shoya
              Ishimaru. “Effects of Counting Seconds in the Mind while Reading”. In <em>Proceedings of
              the 2021 ACM International Joint Conference on Pervasive and Ubiquitous
              Computing: Adjunct Publication (UbiComp ’21 Adjunct)</em>, pp. 486–490, 2021.
            </li>
            <li>
              Prerna Garg, Jayasankar Santhosh, Andreas Dengel, and Shoya Ishimaru. “Stress
              Detection by Machine Learning and Wearable Sensors”. In <em>Proceedings of the 26th
              International Conference on Intelligent User Interfaces Companion (IUI ’21)</em>, pp. 237–
              240, 2021.
            </li>
            <li>
              Jayasankar Santhosh, Shoya Ishimaru, and Andreas Dengel. “Generating Heatmap for
              Unknown Documents Towards Readability Measurement”. In <em>Proceedings of the
              25th International Conference on Intelligent User Interfaces Companion (IUI ’20)</em>, pp.
              47–48, 2020.
            </li>
            <li>
              Jayasankar Santhosh, Shoya Ishimaru, and Andreas Dengel. “Estimating Fixation
              Durations for Each Word in Documents towards Readability Measurement”. In <em>Proceedings 
              of the 1st international interdisciplinary Symposium on Reading
              Experience and Analysis of Documents (READ ’18)</em>, 2018.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Publications;