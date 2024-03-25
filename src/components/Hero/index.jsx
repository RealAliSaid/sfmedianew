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
      <a
        className={styles.calendy_button}
        target="_blank"
        href="https://calendly.com/alexis-bouchama/meeting-call">
        Erstgespräch
      </a>
    </div>
  );
};

export default Home;
