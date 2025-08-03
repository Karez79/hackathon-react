import styles from './BurgerMenu.module.scss';

const BurgerMenu = ({ isOpen, onToggle }) => {
  return (
    <button 
      className={`${styles.burger} ${isOpen ? styles.open : ''}`}
      onClick={onToggle}
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
};

export default BurgerMenu;