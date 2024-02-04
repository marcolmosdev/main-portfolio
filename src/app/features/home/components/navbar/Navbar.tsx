import styles from './Navbar.module.scss'
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

function Navbar() {

  useGSAP(() => {
    const navTl = gsap.timeline();

    navTl.from("." + styles['navbar'], {
      y: -10,
      opacity: 0,
      duration: 0.4,
      delay: 0.5
    });

    const logoImages = document.querySelectorAll("." + styles['navbar__logo-container__logo']);

    if (logoImages && logoImages.length > 0) {

      logoImages.forEach((logo, index) => {
        navTl.from(logo, {
          opacity: 0,
          duration: 0.7,
          delay: index === 0 ? -0.3 : -0.6,
        });
      });
    }

    navTl.from("." + styles['navbar__navbar-menu'], {opacity: 0, delay: -0.3});

  }, []);

  return (
    <>
      <div className={styles['navbar']}>
        <div className={styles['navbar__logo-container']}>
          <img className={styles['navbar__logo-container__logo']} src="/img/logo-third-part.png" alt=""/>
          <img className={styles['navbar__logo-container__logo']} src="/img/logo-third-part.png" alt=""/>
          <img className={styles['navbar__logo-container__logo']} src="/img/logo-third-part.png" alt=""/>
        </div>
        <nav className={styles['navbar__navbar-menu']}>
          <span className={styles['navbar__navbar-menu__link']}>Home</span>
          <span className={styles['navbar__navbar-menu__link']}>About</span>
          <span className={styles['navbar__navbar-menu__link']}>Services</span>
          <span className={styles['navbar__navbar-menu__link']}>Projects</span>
          <span className={styles['navbar__navbar-menu__link']}>Contact</span>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
