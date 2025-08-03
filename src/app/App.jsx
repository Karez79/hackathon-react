import {BrowserRouter} from 'react-router-dom';
import {Button} from '@/shared/ui/Button';
import {Router} from './providers/router';
import {Navbar} from '../widgets/navbar';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <main className={styles.main}>
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
