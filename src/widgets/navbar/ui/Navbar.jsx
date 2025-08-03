import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '../../../widgets/theme-switcher';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo} onClick={closeMenu}>
          React Team
        </Link>

        <BurgerMenu isOpen={isMenuOpen} onToggle={toggleMenu} />

        <div className={styles.navDesktop}>
          <ThemeSwitcher />
          <Link
            to='/'
            className={`${styles.navLink} ${
              location.pathname === '/' ? styles.active : ''
            }`}
          >
            Команда
          </Link>
          <Link
            to='/favorites'
            className={`${styles.navLink} ${
              location.pathname === '/favorites' ? styles.active : ''
            }`}
          >
            Избранное
          </Link>
        </div>

        <div className={`${styles.blurOverlay} ${isMenuOpen ? styles.active : ''}`} onClick={closeMenu}></div>

        <div className={`${styles.navMobile} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link
            to='/'
            className={`${styles.navLink} ${
              location.pathname === '/' ? styles.active : ''
            }`}
            onClick={closeMenu}
          >
            Команда
          </Link>
          <Link
            to='/favorites'
            className={`${styles.navLink} ${
              location.pathname === '/favorites' ? styles.active : ''
            }`}
            onClick={closeMenu}
          >
            Избранное
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;