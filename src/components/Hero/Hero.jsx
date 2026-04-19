import kebab from "../../assets/kebab.png";
import webstudio from "../../assets/webstudio.png";
import weatherDashboard from "../../assets/weatherDashboard.png";
import eventBooster from "../../assets/eventBooster.png";
import headphones from "../../assets/headphones.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="hero">
      <ul className={styles.hero}>
        {/* WEB STUDIO */}
        {/* <li className={styles.item}>
          <a
            href="https://dmitriysavin.github.io/Web-studio-SASS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={webstudio} alt="Web Studio project" />
          </a>

          <div className={styles.content}>
            <h2 className={styles.title}>Web Studio</h2>

            <p className={styles.description}>
              Multi-section website focused on layout structure, responsive
              design and reusable components.
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>HTML</span>
              <span className={styles.tag}>SCSS</span>
              <span className={styles.tag}>JavaScript</span>
            </div>

            <p className={styles.statusLive}>Live</p>
          </div>
        </li>

        <li className={styles.item}>
          <a
            href="https://dmitriysavin.github.io/HighvisitkaLanding/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={kebab} alt="Landing project" />
          </a>

          <div className={styles.content}>
            <h2 className={styles.title}>Kebab Landing</h2>

            <p className={styles.description}>
              Responsive landing page focused on structure, visual hierarchy and
              UI composition.
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>Vite</span>
              <span className={styles.tag}>CSS Modules</span>
            </div>

            <p className={styles.statusLive}>Live</p>
          </div>
        </li>


        <li className={styles.item}>
          <a
            href="https://github.com/DmitriySavin/TheWeatherProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weatherDashboard} alt="Weather app" />
          </a>

          <div className={styles.content}>
            <h2 className={styles.title}>Weather Dashboard</h2>

            <p className={styles.description}>
              Weather application with API integration, dynamic data rendering
              and responsive UI.
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>Css Modules</span>
              <span className={styles.tag}>Vite</span>
              <span className={styles.tag}>API</span>
            </div>

            <p className={styles.statusDemo}>Demo</p>
          </div>
        </li>

        <li className={styles.item}>
          <a
            href="https://github.com/DmitriySavin/eventboosterproject.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={eventBooster} alt="Event Booster app" />
          </a>

          <div className={styles.content}>
            <h2 className={styles.title}>Event Booster</h2>

            <p className={styles.description}>
              Event browsing application with API integration, filtering and
              dynamic content rendering.
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>HTML</span>
              <span className={styles.tag}>SCSS</span>
              <span className={styles.tag}>JavaScript</span>
              <span className={styles.tag}>API</span>
            </div>

            <p className={styles.statusDemo}>Demo</p>
           
          </div>
        </li>
         <li className={styles.item}>
              <a
                href="https://github.com/DmitriySavin/headphones1.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={headphones} alt="headphones" />
              </a>

              <div className={styles.content}>
                <h2 className={styles.title}>Headphones</h2>

                <p className={styles.description}>
                  Product landing page for headphones with a focus on modern layout, visual hierarchy and responsive design.
                </p>

                <div className={styles.tags}>
                  <span className={styles.tag}>HTML</span>
                  <span className={styles.tag}>SCSS</span>
                  <span className={styles.tag}>JavaScript</span>
                  <span className={styles.tag}>parcel</span>
                </div>

                <p className={styles.statusDemo}>Demo</p>
              </div>
            </li> */}
      <li><h1>Clear</h1></li>
      
      </ul>
    </section>
  );
};

export default Hero;
