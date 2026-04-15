import kebab from "../../assets/kebab.png";
import webstudio from "../../assets/webstudio.png";
import weatherDashboard from "../../assets/weatherDashboard.png";
import eventBooster from "../../assets/eventBooster.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero">
      <ul className={styles.hero}>
        <li className={styles.item}>
          <a
            href="https://dmitriysavin.github.io/Web-studio-SASS/"
            target="_blank"
            rel="noopener"
          >
            <img src={webstudio} alt="Web-Studio" />
          </a>
          <div className={styles.tags}>
            <h2 className={styles.tagsDesc}>Project Web-studio</h2>
            <p className={styles.tagsDesc}>
              A practical project dedicated to layout structure, JavaScript
              practices, and website adaptation.
            </p>
            <p className={styles.tagsDesc}>Tech: Html , Scss , Js</p>
            <p className={styles.tagsDesc}>Status: Live deployment</p>
          </div>
        </li>
        <li className={styles.item}>
          <a
            href="https://dmitriysavin.github.io/HighvisitkaLanding/"
            target="_blank"
            rel="noopener"
          >
            <img src={kebab} alt="Web-Studio" />
          </a>

          <div className={styles.tags}>
            <h2 className={styles.tagsDesc}>Kebab Landing Concept</h2>
            <p className={styles.tagsDesc}>
              A project written a long time ago for practice
            </p>
            <p className={styles.tagsDesc}>Tech: React, Vite , moduleCss</p>
            <p className={styles.tagsDesc}>Status: Live deployment</p>
          </div>
        </li>
        <li className={styles.item}>
          <a
            href="https://github.com/DmitriySavin/TheWeatherProject.git"
            target="_blank"
            rel="noopener"
          >
            <img src={weatherDashboard} alt="" />
          </a>
          <div className={styles.tags}>
            <h2 className={styles.tagsDesc}>Project The Weather</h2>
            <p className={styles.tagsDesc}>
              Weather app with API integration and responsive UI design.
            </p>
            <p className={styles.tagsDesc}>
              Tech: React, Vite, moduleCss , OpenWeather API
            </p>
            <p className={styles.tagsDesc}>
              Status: Demo only (no live deployment) (Branch: main)
            </p>
          </div>
        </li>
        <li className={styles.item}>
          <a
            href="https://github.com/DmitriySavin/TheWeatherProject.git"
            target="_blank"
            rel="noopener"
          >
            <img src={eventBooster} alt="" />
          </a>
          <div className={styles.tags}>
            <h2 className={styles.tagsDesc}>Project Event Booster</h2>
            <p className={styles.tagsDesc}>
              Weather app with API integration and responsive UI design.
            </p>
            <p className={styles.tagsDesc}>
              Tech: HtmlPartials, ParcelTemplate, Scss , Js ,TicketMaster API
            </p>
            <p className={styles.tagsDesc}>
              Status: Demo only (no live deployment) (Branch: gh-pages)
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
