import { BrowserRouter } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
import styles from "./App.module.scss";

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
