import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          React Team
        </Link>
        
        <div className={styles.nav}>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
          >
            Команда
          </Link>
          <Link 
            to="/favorites" 
            className={`${styles.navLink} ${location.pathname === '/favorites' ? styles.active : ''}`}
          >
            Избранное
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;