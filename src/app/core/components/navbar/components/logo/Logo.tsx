import styles from './Logo.module.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Logo() {

  useGSAP(() => {
    const logoImages = document.querySelectorAll('.' + styles['logo__part']);
    if (logoImages && logoImages.length > 0) {
      const logoTl = gsap.timeline();
      logoImages.forEach((
        logo,
        index
      ) => {
        logoTl.from(logo, {
          opacity: 0,
          y: -4,
          duration: 0.7,
          delay: index === 0 ? 0.8 : -0.5,
        });
      });
    }
  }, []);

  return (
    <>
      <div className={styles['logo']}>
        <img src="/img/logo.png" alt=""/>
      </div>
    </>
  )
}