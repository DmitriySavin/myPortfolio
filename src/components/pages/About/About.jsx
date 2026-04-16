import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Hi, I'm Dmitriy — a frontend developer focused on building modern,
        responsive and user-friendly web interfaces.
        <br />
        <br />
        I work with React, Vite and CSS to create clean UI, smooth interactions
        and scalable components. I enjoy turning ideas into real projects — from
        simple landing pages to interactive applications with API integration.
        <br />
        <br />
        Currently, I'm building projects using React and Firebase, focusing on
        real-time features and improving overall user experience.
        <br />
        <br />
        I pay attention to layout structure, performance and usability, aiming
        to create interfaces that not only look good but also work efficiently.
        <br />
        <br />
        I'm open to freelance projects and collaboration opportunities.
      </p>

      <p className={styles.current}>
        Currently working on interactive web applications with React and
        Firebase, including real-time data handling and dynamic UI.
      </p>

      <ul className={styles.skills}>
        <li className={styles.skill}>React</li>
        <li className={styles.skill}>JavaScript</li>
        <li className={styles.skill}>CSS</li>
        <li className={styles.skill}>Firebase</li>
        <li className={styles.skill}>Vite</li>
        <li className={styles.skill}>API</li>
      </ul>

      <p className={styles.looking}>
        Looking for freelance projects and real-world experience.
      </p>

      <div className={styles.actions}>
        <Link to="/" className={styles.button}>
          View projects
        </Link>
        <Link to="/contact" className={styles.buttonSecondary}>
          Contact me
        </Link>
      </div>
      <h3>Selected Projects</h3>
      <ul className={styles.cases}>
        <li className={styles.case}>
          <p className={styles.caseTitle}>Weather Dashboard</p>
          <p>
            Web application that provides real-time weather data using an
            external API. Includes search functionality, dynamic updates and a
            clean, responsive interface focused on usability.
          </p>
        </li>

        <li className={styles.case}>
          <p className={styles.caseTitle}>Business Landing Page</p>
          <p>
            Responsive landing page designed to present information clearly and drive user engagement through structured layout and strong visual hierarchy.
          </p>
        </li>
        <li className={styles.case}>
          <p className={styles.caseTitle}>Web Studio</p>
          <p>
           Multi-section website built with a focus on structured layout, reusable components and consistent responsive design across all pages.
          </p>
        </li>
        <li className={styles.case}>
          <p className={styles.caseTitle}>Event Booster</p>
          <p>
           Event browsing application with API integration, featuring search, filtering and pagination to improve content discovery and user experience.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default About;
