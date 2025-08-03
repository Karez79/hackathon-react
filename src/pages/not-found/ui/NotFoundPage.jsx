import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      {/* Анимированный фон */}
      <div className={styles.animatedBackground}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>

      {/* Основной контент */}
      <div className={styles.content}>
        <div className={styles.errorSection}>
          <div className={styles.errorCode}>
            <span>4</span>
            <div className={styles.pulsingCircle}></div>
            <span>4</span>
          </div>
          <h1 className={styles.title}>Страница не найдена</h1>
          <p className={styles.description}>
            Похоже, вы забрели туда, где ничего нет.
            <br />Но не волнуйтесь, мы поможем вам найти дорогу!
          </p>
        </div>

        {/* Анимированная иллюстрация */}
        <div className={styles.illustration}>
          <div className={styles.character}>
            <div className={styles.head}></div>
            <div className={styles.body}></div>
            <div className={styles.questionMark}>?</div>
          </div>
          <div className={styles.searchLines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton}>
            <span>🏠</span>
            Вернуться домой
          </Link>
          <button 
            className={styles.backButton}
            onClick={() => window.history.back()}
          >
            <span>←</span>
            Назад
          </button>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className={styles.decorativeElements}>
        <div className={styles.morphingBlob}></div>
        <div className={styles.gradientOrb}></div>
      </div>
    </div>
  );
};

export default NotFoundPage;