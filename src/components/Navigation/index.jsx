import React, {useState, useEffect, useRef, useCallback} from 'react';
import styles from './Navigation.module.css';
import logo from '../../assets/images/sfMedia.svg';
import 'gsap/ScrollTrigger';
import {gsap} from 'gsap';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const textRef = useRef(null);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (e, url) => {
    e.preventDefault();
    const element = document.getElementById(url);
    window.history.pushState({}, '', `/${url}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  const handleMouseMove = useCallback(
    e => {
      const isScreenLarge = window.matchMedia('(min-width: 768px)').matches;
      if (isOpen || !toggleRef.current || !textRef.current || !isScreenLarge)
        return;
      const rect = toggleRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const moveBy = value => (value < -1 ? 8 : value > 1 ? -8 : 0);

      gsap.to([toggleRef.current, textRef.current], {
        x: moveBy(x),
        y: moveBy(y),
        duration: 0.4,
        ease: 'Power0.easeOut',
      });
    },
    [isOpen],
  );

  const handleMouseLeave = () => {
    gsap.to([toggleRef.current, textRef.current], {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: 'Power0.easeOut',
    });
  };

  useEffect(() => {
    const handleAnimation = () => {
      const childEls = Array.from(menuRef.current.children[0].children);
      gsap.fromTo(
        [menuRef.current, menuRef.current.children[0], ...childEls],
        {y: isOpen ? 50 : 0, opacity: isOpen ? 0 : 1},
        {
          y: isOpen ? 0 : 50,
          opacity: isOpen ? 1 : 0,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          onComplete: () => {
            if (!isOpen) {
              menuRef.current.style.display = 'none';
              gsap.to([toggleRef.current, textRef.current], {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: 'Power0.easeOut',
              });
            }
          },
        },
      );
    };
    if (
      menuRef.current &&
      menuRef.current.children &&
      menuRef.current.children.length > 0
    ) {
      handleAnimation();
    }
  }, [isOpen]);

  return (
    <nav className={styles.nav} aria-label="breadcrumb">
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="sf-media logo" />
        </a>
      </div>
      <div className={styles.nav_items}>
        <li>
          <a
            className={styles.nav_item}
            href="/dienstleistungen"
            onClick={e => handleNavigation(e, 'dienstleistungen')}>
            <span>Dienstleistungen</span>
          </a>
        </li>
        <li>
          <a
            className={styles.nav_item}
            href="/kontakt"
            onClick={e => handleNavigation(e, 'kontakt')}>
            <span>Kontakt</span>
          </a>
        </li>
      </div>
    </nav>
  );
}

export default Navigation;
