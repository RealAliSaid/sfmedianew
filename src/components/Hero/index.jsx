import React from 'react';
import 'gsap/ScrollTrigger';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home} id="startseite">
      <p className={styles.hero_text}>
        Deine Ideen, konkret umgesetzt ob Webdesign, Social Media oder Leads.
        Wir setzen deine Ideen konkret um. Ob Social Media, Webdesign oder
        leads.
      </p>
      <p className={styles.hero_subText}>(Jetzt sprechen)</p>
      <a
        className={styles.calendy_button}
        target="_blank"
        href="https://calendly.com/alexis-bouchama/meeting-call">
        Work with Us!
      </a>
    </div>
  );
};

export default Home;
