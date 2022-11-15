import styles from './Navbar.module.css'
import { NavLink} from 'react-router-dom'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useAuthValue } from '../../contexts/AuthContext'
import logoImg from './SEFE.png'
import plus from './mais.svg'

const Navbar = () => {

    const {logout} = useAuthentication()
    const user = useAuthValue()

    return (
        <div className={styles.navbar}>
            <NavLink className={styles.title_navbar} to={"/"}><img className={styles.logo_img} src={logoImg} alt="" /></NavLink>
            
            <div>
                <ul className={styles.list_link}>
                    {/* <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
                    </li> */}
                   {!user && (
                    <>
                     <li>
                        <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
                    </li>
                    </>
                   )}
                   {user && (
                    <>
                     <li>
                        <NavLink to="/ambiente" className={({ isActive }) => (isActive ? styles.active : "")}>Ambiente</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quest/create" className={({ isActive }) => (isActive ? styles.active : "")}>Frases<img className={styles.plus} src={plus} alt="" /></NavLink>
                    </li>
                    </>
                   )}
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
                    </li>
                    {user && (
                         <li>
                         <NavLink onClick={logout} className={({ isActive }) => (isActive ? styles.active : "")}>Sair</NavLink>
                     </li>
                        
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar