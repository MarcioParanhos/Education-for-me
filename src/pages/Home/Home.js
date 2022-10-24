import styles from './Home.module.css'
import img_component from './SEFE.gif'
import { NavLink, Navigate } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={`${styles.inner_container} ${styles.flex}`}>
            <img src={img_component} alt="" />
            <p>Simplificamos sua maneira de estudar</p>
            <div className={styles.wrap}>
                <NavLink to={"/dashboard"}><button className={styles.button_home}>Acessar</button></NavLink>
              </div>
        </div>
        <div>
            <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className={styles.parallax}>
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,114,94,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,114,94,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,114,94,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FF725E" />
                </g>
            </svg>
        </div>
    </div>
  )
}

export default Home