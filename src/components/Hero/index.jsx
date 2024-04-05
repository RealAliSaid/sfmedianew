import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Home.module.css';

const Home = () => {
  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the hero text
    gsap.from('.hero-text', {
      scrollTrigger: {
        trigger: '.hero-text',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 3
    });

    // Animation for the button
    gsap.from('.calendy-button', {
      scrollTrigger: {
        trigger: '.calendy-button',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  }, []);

  return (
    <div className={styles.home} id="startseite">
      <p className={`${styles.hero_text} hero-text`}>
        Deine Ideen, konkret umgesetzt ob Webdesign, Social Media oder Leads.
        Wir setzen deine Ideen konkret um. Ob Social Media, Webdesign oder
        leads.
      </p>
      <a
        className={`${styles.calendy_button} calendy-button`}
        target="_blank"
        href="https://calendly.com/alexis-bouchama/meeting-call">
        Erstgespräch
      </a>
    </div>
  );
};

export default Home;
