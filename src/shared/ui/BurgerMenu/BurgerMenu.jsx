// src/shared/ui/BurgerMenu/BurgerMenu.jsx
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = ({ isOpen, onToggle, children }) => {
  useEffect(() => {
    // Закрываем меню при клике вне его
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.menu}`) && !event.target.closest(`.${styles.burgerButton}`)) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Бургер кнопка */}
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      {/* Меню */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuContent}>
          {children}
        </div>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BurgerMenu;