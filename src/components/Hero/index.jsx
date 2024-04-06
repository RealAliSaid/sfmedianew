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
      <div className={styles.flexContainer}>
        <p className={`${styles.hero_text} hero-text`}>
          <span className={styles.smallText}>Vom Pixel zu Profit.</span><br />
          <span className={styles.largeText}>Deine kreative Marketing-Agentur für Social Media, Webdesign und Leads, die dein Unternehmen online richtig aufstellt.</span>
        </p>
        <a
          className={`${styles.calendy_button} calendy-button`}
          target="_blank"
          href="https://calendly.com/alexis-bouchama/meeting-call">
          Erstgespräch
        </a>
      </div>
    </div>
  );
};

export default Home;
