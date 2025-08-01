import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <h1>Hackathon React Team</h1>
        <p>Погнали пыхтеть! 🚀</p>
      </div>
    </BrowserRouter>
  );
}

export default App;