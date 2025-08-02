import {useEffect, useState} from 'react';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [colorTheme, setColorTheme] = useState('light');

  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  useEffect(() => {
    const initTheme = localStorage.getItem('color-theme') || getSystemTheme();

    setColorTheme(initTheme);

    document.body.setAttribute('data-theme', initTheme);
  }, []);

  const onThemeChange = ({target}) => {
    const theme = target.checked ? 'dark' : 'light';

    setColorTheme(theme);

    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('color-theme', theme);
  };

  console.log('colorTheme', colorTheme);

  return (
    <label className={styles['theme-switcher']}>
      <span>{colorTheme === 'dark' ? 'тёмная тема' : 'светлая тема'}</span>
      <input
        id='themeSwitcher'
        type='checkbox'
        role='switch'
        aria-label='Переключение темы'
        title='Переключить тему'
        checked={colorTheme === 'dark' ? true : false}
        onChange={onThemeChange}
      />
    </label>
  );
};
