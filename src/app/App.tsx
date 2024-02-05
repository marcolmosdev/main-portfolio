import styles from './App.module.scss'
import Navbar from "./core/components/navbar/Navbar.tsx";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function App() {

  useGSAP(() => {
    gsap.from("." + styles['sections__section__title'], {
      opacity: 0,
      y: 10,
      duration: 0.5,
      delay: 1.6
    });
  }, []);

  return (
    <>
      <Navbar/>
      <div className={styles['sections']}>
        <div id={'home'} className={styles['sections__section']}>
          <div className={styles['sections__section__title']}>
            Meet your next software developer
          </div>
        </div>
        <div id={'about'} className={styles['sections__section']}>About</div>
        <div id={'services'} className={styles['sections__section']}>Services</div>
        <div id={'projects'} className={styles['sections__section']}>Projects</div>
        <div id={'contact'} className={styles['sections__section']}>Contact</div>
      </div>
    </>
  )
}

export default App
