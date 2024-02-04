import styles from './App.module.scss'
import Navbar from "./core/components/navbar/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar/>
      <div className={styles['sections']}>
        <div id={'home'} className={styles['sections__section']}>Home</div>
        <div id={'about'} className={styles['sections__section']}>About</div>
        <div id={'services'} className={styles['sections__section']}>Services</div>
        <div id={'projects'} className={styles['sections__section']}>Projects</div>
        <div id={'contact'} className={styles['sections__section']}>Contact</div>
      </div>
    </>
  )
}

export default App
