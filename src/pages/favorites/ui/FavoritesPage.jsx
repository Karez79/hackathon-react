import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  return (
    <div className={styles.favoritesPage}>
      <div className={styles.container}>
        <h1>Избранное</h1>
        <p className={styles.subtitle}>
          Здесь будут отображаться ваши избранные участники команды
        </p>
        
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>⭐</div>
          <p className={styles.emptyText}>
            Пока нет избранных участников.<br />
            Добавьте их из списка команды!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;