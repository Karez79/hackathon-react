import { Router } from "./providers/router";
import { Navbar } from "../widgets/navbar";
import { BrowserRouter } from "react-router-dom";
import styles from "./App.module.scss";
import { Button } from "@/shared/ui/Button";

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
