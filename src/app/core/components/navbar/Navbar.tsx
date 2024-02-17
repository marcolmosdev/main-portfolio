import styles from './Navbar.module.scss'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { HashLink } from 'react-router-hash-link';
import Hamburger from './components/hamburger/Hamburger.tsx';
import { useState } from 'react';
import Logo from './components/logo/Logo.tsx';

function Navbar() {

  const [hamburgerState, setHamburgerState] = useState(false);

  const toggleHamburger = () => {
    setHamburgerState(!hamburgerState);
  };

  useGSAP(() => {
    gsap.timeline()
      .from('.' + styles['navbar'], {
        y: -10,
        opacity: 0,
        duration: 0.4,
        delay: 0.5
      })
      .from('.' + styles['navbar__navbar-menu'], {
        opacity: 0,
        delay: 0.6
      });
  }, []);

  return (
    <>
      <div className={styles['navbar']}>
        <HashLink to="#home" className={styles['navbar__logo-container']}>
          <Logo/>
        </HashLink>
        <nav className={styles['navbar__navbar-menu']}>
          <HashLink to="#about" className={styles['navbar__navbar-menu__link']}>About</HashLink>
          <HashLink to="#services" className={styles['navbar__navbar-menu__link']}>Services</HashLink>
          <HashLink to="#projects" className={styles['navbar__navbar-menu__link']}>Projects</HashLink>
          <HashLink to="#contact" className={styles['navbar__navbar-menu__link']}>Contact</HashLink>
        </nav>
        <div className={styles['navbar__hamburger-container']}>
          <Hamburger onClick={toggleHamburger} hamburgerState={hamburgerState}/>
        </div>
      </div>
    </>
  )
}

export default Navbar;
